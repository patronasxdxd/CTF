import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABIBox, GovenorContract,GovernanceToken, contractABIGovernor, DiamondAddress, contractABIGovToken } from "../utils/constants";
export const BoxContext = React.createContext();

const { ethereum } = window;
let loaded = false;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const boxContract = new ethers.Contract(DiamondAddress, contractABIBox, signer);
  return boxContract;

};

const createGovenorToken = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);

  const signer = provider.getSigner();
  const govContract = new ethers.Contract(DiamondAddress, contractABIGovToken, signer);
  return govContract;
};

const createGovernorContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const govContract = new ethers.Contract(GovenorContract, contractABIGovernor, signer);
  return govContract;
};



const createTokenContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const govContract = new ethers.Contract( DiamondAddress, contractABIGovToken, signer);
  return govContract;
}

export const BoxContentProvider = ({ children }) => {
  const [formData, setformData] = useState({ target: "", values: "", calldatas: "", description: "" });
  const [voteData, setvoteData] = useState({ proposal: "", values: "", reason: "" });
  const [execData, setExecData] = useState({ proposal: "" });
  const [addressData, setAddressData] = useState({ address: "" });
  const [structArray, setStructArray] = useState([]);
  const [isLoadingExecute, setIsLoadingExecute] = useState(false);
  const [isProposalActive,setisProposalActive] = useState(false);
  const [isLoadingVote, setIsLoadingVote] = useState(false);
  const [isLoadingFaucet, setisLoadingFaucet] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [boxvalues, setboxValues] = useState([]);
  const [previousBlockNumber, setPreviousBlockNumber] = useState(null);

  const blockvalue =0;
  const [timevalue, settimevalues] = useState([]);
  const [durationvalues,setdurationvalues] = useState([]);
  const [proposalId, setProposalId] = useState([]);
  const [currentProposal, setCurrentProposal] = useState([]);
  const [voteTime, setvoteTime] = useState("");



  const handleChangeAddress = (e, name) => {
    console.log("changing")

    setAddressData((prevState) => ({ ...prevState, [name]: e.target.value }));
  }

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const handleChangeExecute = (e, name) => {
    setExecData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const handleChangeVote = (e, name) => {
    setvoteData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const makeCards = async () => {
    loaded = true;
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.value,
          amount: transaction.amount.toNumber()
        }));

    

        setStructArray(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };



  // proposalDeadline


  useEffect(() => {
    // Function to fetch the current block number
    const fetchBlockNumber = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const newBlockNumber = await provider.getBlockNumber();
        const governor = createGovernorContract();
        const boxContract = createEthereumContract();


        const numbers = await governor.proposalDeadline(boxContract.getProposal())



   


        if (newBlockNumber !== previousBlockNumber) {
          setPreviousBlockNumber(newBlockNumber); // Update the previous block number
          setdurationvalues( numbers.toNumber() - newBlockNumber);
        }
      } catch (error) {
        console.error('Error fetching block number:', error);
      }
    };

    // Fetch the initial block number
    fetchBlockNumber();
  
    // Set up an interval to periodically check for new blocks (every 10 seconds in this example)
    const refreshInterval = setInterval(() => {
      fetchBlockNumber();
    }, 1000); // 10 seconds

  

        // Clean up the interval when the component unmounts
        return () => {
          clearInterval(refreshInterval);
        };
      }, []); // Empty dependency array means this effect runs once on component mount
    


  const getTime = async () => {


    try {

      if ( ethereum)
    {
      console.log('123231')

      const governor = createGovernorContract();
      const boxContract = createEthereumContract();

      const numbers = await governor.proposalDeadline(boxContract.getProposal())


      const provider = new ethers.providers.Web3Provider(ethereum);

      const blockNumber = await provider.getBlockNumber();
   

      // setdurationvalues(  numbers.toNumber() - blockNumber);
    }      
    } catch (error) {
      
    }
  }


  const getVotes = async () => {


    try {

      if ( ethereum)
    {

      const governor = createGovernorContract();
      const boxContract = createEthereumContract();

      const numbers = await governor.getTotalVotesForProposal(boxContract.getProposal())


   


      settimevalues( numbers.toNumber());
    }      
    } catch (error) {
      
    }
  }

  const getAllTransactions = async () => {


    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions = await transactionsContract.retrieve();


        setboxValues(availableTransactions.toNumber());
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getProposalId = async () => {


    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const govContract = createGovernorContract();

        const availableTransactions = await transactionsContract.getProposal();
        const state = await govContract.state(availableTransactions)


        setProposalId(state);


        console.log(state);
        if (state == 1    ){
          setisProposalActive(true);
        } else{
          setisProposalActive(false);
        }


      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };



  const getCurrentProposal = async () => {
    try {
      if (ethereum) {
        const boxContract = createEthereumContract();

        const availableTransactions = await boxContract.getProposal();
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        if (!loaded) {
          makeCards();
        };
        getAllTransactions();
        getVotes();
        getProposalId();
        getTime();
        getCurrentProposal();
        //checkSate();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  checkIfWalletIsConnect();


  const execute = async () => {
    try {
      if (ethereum) {

        const governor = createGovernorContract();
        const boxContract = createEthereumContract();
        const govenorToken = createGovenorToken();

        console.log("executing...e")
        console.log(await governor.votingPeriod());

        const proposalState = await governor.state(boxContract.getProposal());
        console.log(`Current Proposal States: ${proposalState}`);
        let valueData = 0;
        let descriptionData = "";

        const value = await boxContract.getAllTransactions();
        const count = await boxContract.getTransactionCount();
        if (count > 0) {
          valueData = value[count - 1].amount.toNumber();
          descriptionData = value[count - 1].value;

        }
        const encodedFunctionCall = boxContract.interface.encodeFunctionData("store", [valueData])
        const descriptionHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(descriptionData))
        console.log(descriptionHash)



        if (proposalState == 4) {
          console.log("status5")
          console.log("Queueing...")
          const queueTx = await governor.queue([DiamondAddress], [0], [encodedFunctionCall], descriptionHash)
          setIsLoadingExecute(true);

          await queueTx.wait(1);
          setIsLoadingExecute(false);

        }

        if (proposalState == 5) {

          const executeTx = await governor.execute(
            [DiamondAddress],
            [0],
            [encodedFunctionCall],
            descriptionHash
          )
          setIsLoadingExecute(true);

          await executeTx.wait(1)
          setIsLoadingExecute(false);
          console.log(`Box value: ${await boxContract.retrieve()}`)

        }
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }

  };



  const faucet = async () => {
    try {
      if (ethereum) {

        const { address } = addressData;




    

 

        const tokenContract = createTokenContract();

        console.log("minting!")

        
        const queueTx = await tokenContract.mint(address,1)
        setisLoadingFaucet(true);


        console.log("delegating!")
        await tokenContract.delegate(address)

        await queueTx.wait(1);
        setisLoadingFaucet(false);


      }
    } catch (error) {
        console.log(error);
      }
  }


  const propose = async () => {
    try {
      if (ethereum) {
        const { target, values, calldatas, description } = formData;

        const governorContract = createGovernorContract();
        const boxContract = createEthereumContract();
        const tokenContract = createTokenContract();

     
        // await tokenContract.mint("0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f",1000000)

        const encodedFunctionCall = boxContract.interface.encodeFunctionData(calldatas, [values]);
        console.log(`Proposing ${calldatas} on ${boxContract.address} with ${values}`)
        console.log(`Proposal Description:\n  ${description}`)

        const proposeTx = await governorContract.propose(
          [DiamondAddress],
          [0],
          [encodedFunctionCall],
          description
        )


        setIsLoading(true);



        const proposeReceipt = await proposeTx.wait(1)
        setIsLoading(false);
        const proposalId = proposeReceipt.events[0].args.proposalId
        console.log(`Proposed with proposal ID:\n  ${proposalId}`)
        const proposalState = await governorContract.state(proposeReceipt.events[0].args.proposalId);

        console.log(`Current Proposal States: ${proposalState}`);
        const id = await boxContract.addProposalStruct(proposeReceipt.events[0].args.proposalId, values, description);
        setIsLoading(true);
        const addReceipt = await id.wait(1)
        setIsLoading(false);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }

  };



  const vote = async () => {
    try {
      if (ethereum) {
        const { values, reason } = voteData;

        const governor = createGovernorContract();
        const boxContract = createEthereumContract();
        const tokenContract = createTokenContract();
  

        async function mintTokens() {
          const recipient = "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f";
          const amount = 1000000;
        
          try {
            // Send the mint transaction
           
            const tx = await tokenContract.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",10000);
        
            // Transaction was successful
            console.log("Transaction Hash:", tx.transactionHash);
            console.log("Gas Used:", tx.gasUsed);
        
            // You can also check the receipt for additional information
            // const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
            // console.log("Receipt:", receipt);
        
            // Handle any other logic for a successful transaction
          } catch (error) {
            // Transaction failed or encountered an error
            console.error("Error minting tokens:", error);
        
            // Handle the error, e.g., display an error message to the user
          }
        }
        
        // Call the function to mint tokens
        // mintTokens();

        // const account = '0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f'; // Replace with your Ethereum address
        // const currentTime = 293; // Get the current Unix timestamp

        // const votingpower = await governor.getVotes(account,currentTime);
      
        // console.log("voting power:= " + votingpower)

        console.log(values)
        // 0 = Against, 1 = For, 2 = Abstain for this example
        console.log("Voting...")
        const proposalState2 = await governor.state(boxContract.getProposal());
        console.log(`Current Proposal State: ${proposalState2}`)

        console.log(governor)
        console.log(`total votes ${ await  governor.getTotalVotesForProposal(boxContract.getProposal())}`)


        const voteTx = await governor.castVoteWithReason(boxContract.getProposal(), values, reason)
        setIsLoadingVote(true);
        const voteTxReceipt = await voteTx.wait(1)
        setIsLoadingVote(false);




      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
      console.log("no vote yet")
    }

  };

  const checkIfProposalExists = async () => {
    try {
      if (ethereum) {
        console.log("checking");
        const boxContract = createEthereumContract();
        const id = await boxContract.getProposal();
        console.log(id);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };













  useEffect(() => {
    checkIfProposalExists();
    const interval = setInterval(() => getProposalId(), 1000);
  }, [proposalId]);


  return (
    <BoxContext.Provider
      value={{
        boxvalues,
        setboxValues,
        handleChange,
        formData,
        currentAccount,
        propose,
        proposalId,
        voteData,
        handleChangeVote,
        handleChangeAddress,
        handleChangeExecute,
        isLoadingFaucet,
        vote,
        voteTime,
        durationvalues,
        execute,
        faucet,
        addressData,
        execData,
        currentProposal,
        isProposalActive,
        isLoading,durationvalues,
        getTime,
        isLoadingVote,
        isLoadingExecute,
        structArray,timevalue
      

      }}
    >
      {children}
    </BoxContext.Provider>
  );
};
