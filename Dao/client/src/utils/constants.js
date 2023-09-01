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

export const DiamondCutFacetAdress = "0xFD471836031dc5108809D173A067e8486B9047A3"
export const DiamondAddress  = "0xcbEAF3BDe82155F56486Fb5a1072cb8baAf547cc"
export const DiamondInitAddress  = "0x1429859428C0aBc9C2C47C8Ee9FBaf82cFA0F20f"

//Deploying facets
export const DiamondLoupeFacet = "0xB0D4afd8879eD9F52b28595d31B441D079B2Ca07"
export const OwnershipFacet = "0x162A433068F51e18b7d13932F27e66a3f99E6890"
export const BoxFacet = "0x922D6956C99E12DFeB3224DEA977D0939758A1Fe"
export const GovernanceToken = "0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f"

export const timeLockAddress = "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6"
export const GovenorContract = "0x2E2Ed0Cfd3AD2f1d34481277b3204d807Ca2F8c2"

export const contractABI = abi.abi;
export const contractABIDiamond = abiDia.abi;
export const contractABIBox = abiBox.abi;
export const contractABIDiamondCut = abiCut.abi;
export const contractABIDiamondLoupe = abiLoupe.abi;
export const contractABIGovToken = abiToken.abi;
export const contractABIGovernor = abiGovernor.abi;
export const contractABIOwnership = abiOwnerShip.abi;
export const contractABITimeLock = abiTimeLock.abi;