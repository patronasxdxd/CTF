import abi from "./Transactions.json";
import abiDia from "./diamond.json";
import abiBox from "./BoxFacet.json";
import abiCut from "./DiamondCutFacet.json";
import abiLoupe from "./DiamondLoupeFacet.json";
import abiToken from "./GovernanceToken.json";
import abiGovernor from "./GovernorContract.json";
import abiOwnerShip from "./OwnershipFacet.json";
import abiTimeLock from "./TimeLock.json";




// export const contractAddress = "0xfCCF80344a668b72ac4Be23513F0E9E4a35C84fA";
// export const DiamondCutFacetAdress = "0xcf9aa2389cBA76b4Fa0A56e948e83F164D13a5Ab";
// export const DiamondAddress = "0x8085114b3b2ce7700727D9B76eF9f4a3d24DC056";
// export const DiamondInitAddress = "0xe111f349E7341A0E28d7BDAc8c19C7b040307Be9";
// export const DiamondLoupeFacet = "0xC43E3c73fD370B8133c179058e7d6A90A69132E8";
// export const OwnershipFacet = "0x9dBD143D016897AB81DAaF33A254B187B3Ba0553";
// export const BoxFacet = "0xF095d9d0d9E3E85EA779fE97e2B68Ce9C0aC57e7";
// export const GovernanceToken = "0x29416043930f26E8475844645fe9D05D95923bf4";
// export const timeLockAddress = "0x2D4068aA2253d389b8aF780F6883b8dED3Da5322";
// export const GovenorContract = "0xb2DFE0e45B25AB9CabD886D34D85F686f7D060F6";


export const contractAddress = "0xfCCF80344a668b72ac4Be23513F0E9E4a35C84fA";

export const DiamondCutFacetAdress = "0x942ED2fa862887Dc698682cc6a86355324F0f01e"
export const DiamondAddress  = "0x8D81A3DCd17030cD5F23Ac7370e4Efb10D2b3cA4"
export const DiamondInitAddress  = "0xcC4c41415fc68B2fBf70102742A83cDe435e0Ca7"

//Deploying facets
export const DiamondLoupeFacet = "0xa722bdA6968F50778B973Ae2701e90200C564B49"
export const OwnershipFacet = "0xc7cDb7A2E5dDa1B7A0E792Fe1ef08ED20A6F56D4"
export const BoxFacet = "0x967AB65ef14c58bD4DcfFeaAA1ADb40a022140E5"
export const GovernanceToken = "0xe1708FA6bb2844D5384613ef0846F9Bc1e8eC55E"
export const timeLockAddress = "0x8e264821AFa98DD104eEcfcfa7FD9f8D8B320adA"
export const GovenorContract = "0xC1e0A9DB9eA830c52603798481045688c8AE99C2"

export const contractABI = abi.abi;
export const contractABIDiamond = abiDia.abi;
export const contractABIBox = abiBox.abi;
export const contractABIDiamondCut = abiCut.abi;
export const contractABIDiamondLoupe = abiLoupe.abi;
export const contractABIGovToken = abiToken.abi;
export const contractABIGovernor = abiGovernor.abi;
export const contractABIOwnership = abiOwnerShip.abi;
export const contractABITimeLock = abiTimeLock.abi;