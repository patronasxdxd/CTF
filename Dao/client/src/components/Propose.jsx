import React, { useContext } from "react";
import { BoxContext } from "../context/BoxContext";
import { Loader } from ".";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="mt-2 p-2 border border-black rounded-md w-full min-w-[300px]" 
  />
);

const inputClass = "mt-2 p-2 border border-black rounded-md w-full min-w-[300px]";

const Propose = () => {


  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading, propose, proposalId } = useContext(BoxContext);


  const handleSubmit = (e) => {
    const { values, calldatas, description } = formData;

    e.preventDefault();


    if (!values || !calldatas || !description) return;

    propose();
  };

  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 ">


      {proposalId === 3 || proposalId === 2 || proposalId === 6
        ? <h2 className="text-3xl text-white">

          The proposal failed, Please try again

        </h2>
        : (
          <h2 >



          </h2>
        )}


      {proposalId === 7
        ? <span class="inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm">Create A Proposal!
          <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </span>
        : (
          <h2 >



          </h2>
        )}


      {/* <h2 className="text-white text-base text-center mx-2"> Proposal</h2> */}



      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center" style={{ backgroundColor: 'brown', borderWidth: '4px', borderColor: 'black',borderRadius: '10px' }} >
      <Input
  placeholder="Enter a number"
  name="values"
  type="number"
  handleChange={handleChange}
  className={inputClass} // Apply the common styling class
/>

<Input
  placeholder="Enter calldatas, should be 'store'"
  name="calldatas"
  type="text"
  handleChange={handleChange}
  className={inputClass} // Apply the common styling class
/>

<Input
  placeholder="Enter description"
  name="description"
  type="text"
  handleChange={handleChange}
  className={inputClass} // Apply the common styling class
/>

        <div className="h-[1px] w-full bg-gray-400 my-2" />

        {isLoading
          ? <Loader />
          : (
            <button
              type="button"
              onClick={handleSubmit}
              className="text-black text-2xl sm:text-2xl w-full mt-2 border-[3px] p-2 border-solid border-black hover:bg-black hover:text-white rounded-md cursor-pointer"
              >
              Propose
            </button>
          )}


      </div>
      {/* <h2 className="text-white text-base text-center mx-2">Current proposal: </h2>
        <div className="text-white text-base text-center mx-2">
          {proposalId} */}


      {/* </div> */}
      {proposalId === 1
        ? <h2 className="text-white text-base text-center mx-2">

          Proposal created!

        </h2>
        : (
          <h2 >



          </h2>
        )}

    </div>
  );
};

export default Propose;
