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

export const DiamondCutFacetAdress = "0xA56F946D6398Dd7d9D4D9B337Cf9E0F68982ca5B"
export const DiamondAddress  = "0x5D42EBdBBa61412295D7b0302d6F50aC449Ddb4F"
export const DiamondInitAddress  = "0xddE78e6202518FF4936b5302cC2891ec180E8bFf"

//Deploying facets
export const DiamondLoupeFacet = "0xB06c856C8eaBd1d8321b687E188204C1018BC4E5"
export const OwnershipFacet = "0xaB7B4c595d3cE8C85e16DA86630f2fc223B05057"
export const BoxFacet = "0xAD523115cd35a8d4E60B3C0953E0E0ac10418309"
export const GovernanceToken = "0x045857BDEAE7C1c7252d611eB24eB55564198b4C"
export const timeLockAddress = "0x413b1AfCa96a3df5A686d8BFBF93d30688a7f7D9"
export const GovenorContract = "0x5133BBdfCCa3Eb4F739D599ee4eC45cBCD0E16c5"

export const contractABI = abi.abi;
export const contractABIDiamond = abiDia.abi;
export const contractABIBox = abiBox.abi;
export const contractABIDiamondCut = abiCut.abi;
export const contractABIDiamondLoupe = abiLoupe.abi;
export const contractABIGovToken = abiToken.abi;
export const contractABIGovernor = abiGovernor.abi;
export const contractABIOwnership = abiOwnerShip.abi;
export const contractABITimeLock = abiTimeLock.abi;