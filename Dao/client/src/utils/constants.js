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

export const DiamondCutFacetAdress = "0x457cCf29090fe5A24c19c1bc95F492168C0EaFdb"
export const DiamondAddress  = "0x525C7063E7C20997BaaE9bDa922159152D0e8417"
export const DiamondInitAddress  = "0x38a024C0b412B9d1db8BC398140D00F5Af3093D4"

//Deploying facets
export const DiamondLoupeFacet = "0x5fc748f1FEb28d7b76fa1c6B07D8ba2d5535177c"
export const OwnershipFacet = "0xB82008565FdC7e44609fA118A4a681E92581e680"
export const BoxFacet = "0x2a810409872AfC346F9B5b26571Fd6eC42EA4849"
export const GovernanceToken = "0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C"



export const timeLockAddress = "0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849"
export const GovenorContract = "0x6F6f570F45833E249e27022648a26F4076F48f78"


export const contractABI = abi.abi;
export const contractABIDiamond = abiDia.abi;
export const contractABIBox = abiBox.abi;
export const contractABIDiamondCut = abiCut.abi;
export const contractABIDiamondLoupe = abiLoupe.abi;
export const contractABIGovToken = abiToken.abi;
export const contractABIGovernor = abiGovernor.abi;
export const contractABIOwnership = abiOwnerShip.abi;
export const contractABITimeLock = abiTimeLock.abi;