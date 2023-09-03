import abi from "./Transactions.json";
import abiDia from "./diamond.json";
import abiBox from "./BoxFacet.json";
import abiCut from "./DiamondCutFacet.json";
import abiLoupe from "./DiamondLoupeFacet.json";
import abiToken from "./GovernanceToken.json";
import abiGovernor from "./GovernorContract.json";
import abiOwnerShip from "./OwnershipFacet.json";
import abiTimeLock from "./TimeLock.json";


export const contractAddress = "0xfCCF80344a668b72ac4Be23513F0E9E4a35C84fA";

export const DiamondCutFacetAdress =  "0x1291Be112d480055DaFd8a610b7d1e203891C274"
export const DiamondAddress  = "0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154"
export const DiamondInitAddress  = "0xb7278A61aa25c888815aFC32Ad3cC52fF24fE575"

//Deploying facets
export const DiamondLoupeFacet = "0xCD8a1C3ba11CF5ECfa6267617243239504a98d90"
export const OwnershipFacet = "0x82e01223d51Eb87e16A03E24687EDF0F294da6f1"
export const BoxFacet = "0x2bdCC0de6bE1f7D2ee689a0342D76F52E8EFABa3"
export const GovernanceToken = "0x7969c5eD335650692Bc04293B07F5BF2e7A673C0"


export const timeLockAddress = "0xc351628EB244ec633d5f21fBD6621e1a683B1181"
export const GovenorContract = "0xB0D4afd8879eD9F52b28595d31B441D079B2Ca07"


export const contractABI = abi.abi;
export const contractABIDiamond = abiDia.abi;
export const contractABIBox = abiBox.abi;
export const contractABIDiamondCut = abiCut.abi;
export const contractABIDiamondLoupe = abiLoupe.abi;
export const contractABIGovToken = abiToken.abi;
export const contractABIGovernor = abiGovernor.abi;
export const contractABIOwnership = abiOwnerShip.abi;
export const contractABITimeLock = abiTimeLock.abi;