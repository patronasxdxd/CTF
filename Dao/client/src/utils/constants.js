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

export const DiamondCutFacetAdress = " 0x0B306BF915C4d645ff596e518fAf3F9669b97016 "
export const DiamondAddress  = " 0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1 "
export const DiamondInitAddress  = " 0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE "

//Deploying facets
export const DiamondLoupeFacet = "0x68B1D87F95878fE05B998F19b66F4baba5De1aed"
export const OwnershipFacet = "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c"
export const BoxFacet = "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d"
export const GovernanceToken = "0x59b670e9fA9D0A427751Af201D676719a970857b"

export const timeLockAddress = "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44"
export const GovenorContract = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"

export const contractABI = abi.abi;
export const contractABIDiamond = abiDia.abi;
export const contractABIBox = abiBox.abi;
export const contractABIDiamondCut = abiCut.abi;
export const contractABIDiamondLoupe = abiLoupe.abi;
export const contractABIGovToken = abiToken.abi;
export const contractABIGovernor = abiGovernor.abi;
export const contractABIOwnership = abiOwnerShip.abi;
export const contractABITimeLock = abiTimeLock.abi;
