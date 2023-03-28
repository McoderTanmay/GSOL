import React from 'react';
import Form from './Form';
import DataCtx from './Context/DataCtx';

function FirstPg(){
       const childData = async (enteredData) => {
         const responce=await fetch('https://blockchaindb-575f6-default-rtdb.firebaseio.com/PatientData.json',{
          method:'POST',
          body:JSON.stringify(enteredData),
          headers:{
            'content-Type':'application/json',
          }
         })
         const data=await responce.json();
         console.log(data);
      };
      return(
        <>
        <DataCtx.Provider
        value={{
            ForwardingData:childData,
        }}
        >
        <Form></Form>
        {/* <DummyList onEnteredList={enterdlist}></DummyList> */}
        </DataCtx.Provider>
        </>
      )
}
export default FirstPg;