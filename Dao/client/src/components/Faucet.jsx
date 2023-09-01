import React, { useContext } from "react";
import { BoxContext } from "../context/BoxContext";
import { Loader } from ".";

const Input = ({ placeholder, name, type, value, handleChangeAddress }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChangeAddress(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Faucet = () => {

  const { currentAccount, connectWallet, handleChangeAddress, sendTransaction, formData, isLoading, faucet, vote, voteData, execute, handleChangeExecute,addressData, proposalId, voteTime, isLoadingExecute } = useContext(BoxContext);



  const handleSubmit = (e) => {
    const { address } = addressData;


    console.log(address)

    e.preventDefault();

    if (!address ) return;

    console.log("daw")
    faucet();
  };



  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 ">


    
      <h2 className="text-white text-base text-center mx-2"> GovToken Faucet </h2>

      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
      <Input placeholder="enter a number" name="address" type="string" handleChangeAddress={handleChangeAddress} />





        {isLoadingExecute
          ? <Loader />
          : (
            <button
            type="button"
            onClick={handleSubmit}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            retrieve tokens
          </button>
          )}


      </div>






    </div>
  );



};

export default Faucet;
