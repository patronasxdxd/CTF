import React, { useContext } from "react";
import { BoxContext } from "../context/BoxContext";

import { Loader } from ".";




const Input = ({ placeholder, name, type, value, handleChangeVote }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChangeVote(e, name)}
      className="mt-2 p-2 border border-black rounded-md w-full min-w-[300px]" 
    />
  );


const Vote = () => {

    const { currentAccount, currentProposal,connectWallet, handleChangeVote, sendTransaction, formData, isLoading,propose, proposalId,vote,voteData,isLoadingVote } = useContext(BoxContext);

    const handleSubmit = (e) => {
        const { values , reason} = voteData;
    
        e.preventDefault();
    
        if ( !values || !reason) return;
    
        vote();
      };

    

      return (

        

        
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 ">
        
        {proposalId === 1
                  ?   <span class="inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm">Vote now
                  <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                  </svg>
              </span>
                  : (
                    <h2 >
              
                     
                      
                    </h2>
                  )}
          
         
          {/* <h2 className="text-white text-base text-center mx-2"> Vote: </h2> */}
              
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center" style={{ backgroundColor: 'brown', borderWidth: '4px', borderColor: 'black',borderRadius: '10px' }} >
                <h2 className="text-black text-3xl sm:text-3xl font-bold text-base text-center mx-2 m-3"> Vote </h2>

                <Input placeholder="0 = Against, 1 = For, 2 = Abstain" name="values" type="number" handleChangeVote={handleChangeVote} />
                <Input placeholder="reason" name="reason" type="text" handleChangeVote={handleChangeVote} />

              
    
                <div className="h-[1px] w-full bg-gray-400 my-2" />
    
                {isLoadingVote
                  ? <Loader />
                  : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="text-black text-2xl sm:text-2xl w-full mt-2 border-[3px] p-2 border-solid border-black hover:bg-black hover:text-white rounded-md cursor-pointer"
                      >
                      Vote
                    </button>
                  )}
           
          
          </div>

        {/* <div className="text-white text-base text-center mx-2">
          {proposalId}
          {currentProposal}

      
      
        </div> */}
        {proposalId === 4
                  ?  <h2 className="text-white text-base text-center mx-2">
              
                 you've Voted!
                  
                </h2>
                  : (
                    <h2 >
              
                     
                      
                    </h2>
                  )}
          
    
          
        </div>

      );
                 
   


};

export default Vote;
