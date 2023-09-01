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

export const DiamondCutFacetAdress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
export const DiamondAddress  = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
export const DiamondInitAddress  = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"

//Deploying facets
export const DiamondLoupeFacet = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
export const OwnershipFacet = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"
export const BoxFacet = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
export const GovernanceToken = "0x0165878A594ca255338adfa4d48449f69242Eb8F"




export const timeLockAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6"
export const GovenorContract = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0"


export const contractABI = abi.abi;
export const contractABIDiamond = abiDia.abi;
export const contractABIBox = abiBox.abi;
export const contractABIDiamondCut = abiCut.abi;
export const contractABIDiamondLoupe = abiLoupe.abi;
export const contractABIGovToken = abiToken.abi;
export const contractABIGovernor = abiGovernor.abi;
export const contractABIOwnership = abiOwnerShip.abi;
export const contractABITimeLock = abiTimeLock.abi;