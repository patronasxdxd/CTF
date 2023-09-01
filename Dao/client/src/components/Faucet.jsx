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

  const { currentAccount, connectWallet, handleChangeAddress, sendTransaction, formData, isLoading, faucet, vote, voteData, execute, handleChangeExecute,addressData, proposalId, voteTime, isLoadingFaucet } = useContext(BoxContext);



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


    

      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center" style={{ backgroundColor: 'brown', borderWidth: '4px', borderColor: 'black',borderRadius: '10px' }} >
      <h2 className="text-black text-3xl sm:text-3xl font-bold text-base text-center mx-2"> GovToken Faucet </h2>

   
      <div className="flex flex-col items-start">
          <br></br>
  {/* <label className="text-black text-2xl">Enter an address:</label> */}
  <input
    placeholder="Enter address: e.g., 0x1234..."
    name="address"
    type="string"
    onChange={(e) => handleChangeAddress(e, "address")}
    className="mt-2 p-2 border border-black rounded-md w-full min-w-[300px]" 
  />
  <br></br>
</div>







        {isLoadingFaucet
          ? <Loader />
          : (
            <button
  type="button"
  onClick={handleSubmit}
  className="text-black text-bold text-2xl sm:text-2xl w-full mt-2 border-[3px] p-2 border-solid border-black hover:bg-black hover:text-white rounded-md cursor-pointer"
>
            Retrieve tokens
          </button>
          )}


      </div>






    </div>
  );



};

export default Faucet;
