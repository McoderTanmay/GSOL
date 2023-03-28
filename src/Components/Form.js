import React, { useState,useContext } from "react";
import DataCtx from "./Context/DataCtx";
import "./Form.css";

function Form() {
const ctx=useContext(DataCtx)

  const [nameEntChange, setnameEntChange] = useState("");
  const nameChange = (event) => {
    setnameEntChange(event.target.value);
  };

  const [numberEntChange, setnumberEntChange] = useState("");
  const numberChange = (event) => {
    setnumberEntChange(event.target.value);
  };

  const [medEntChange, setmedEntChange] = useState("");
  const medChange = (event) => {
    setmedEntChange(event.target.value);
  };
  const [agEntChange,setagEntChange]=useState("");
  const agchange=(event)=>{
    setagEntChange(event.target.value);
  }
  const [Bdentchange,setBdentchange]=useState("");
  const BDchange=(event)=>{
    setBdentchange(event.target.value);
  }
  const [textentChange,settextentChange]=useState("");
  const txtchange=(event)=>{
    settextentChange(event.target.value);
  }
  const [otherEntChange,setotherEntChange]=useState("");
  const otherchange=(event)=>{
    setotherEntChange(event.target.value);
  }
  const SubmitHandeler = (event) => {
    event.preventDefault();
    const data = {
      Name: nameEntChange,
      contact: numberEntChange,
      medicine: medEntChange,
      Ageop:agEntChange,
      BDchng:Bdentchange,
      TstRp:textentChange,
      other:otherEntChange,
    };
    ctx.ForwardingData(data);

    setnameEntChange("");
    setnumberEntChange("");
    setmedEntChange("");
    setagEntChange('');
    setBdentchange('');
    settextentChange('');
    setotherEntChange('');
  };

  return (
    <div className="form">
      <form action="" className="inner-form">
        <div className="formContent">
          <label className="form-label">Name</label><br />
          <input type="text" onChange={nameChange} value={nameEntChange} />
        </div>
        <div className="formContent">
          <label className="form-label">Contact</label>
          <br />
          <input 
            type="number"
            onChange={numberChange}
            value={numberEntChange}
          />
        </div>
        <div className="formContent">
          <label className="form-label">Disease</label>
          <br/>
          <input type="text" onChange={medChange} value={medEntChange} />
        </div>
        <div className="formContent">
          <label className="form-label">Age of Patient</label>
          <br/>
          <input type="text" onChange={agchange} value={agEntChange} />
        </div>
        <div className="formContent">
          <label className="form-label">Blood group</label>
          <br/>
          <input type="text" onChange={BDchange} value={Bdentchange} />
        </div>
        <div className="formContent">
          <label className="form-label">Test Reports</label>
          <br/>
          <input type="text" onChange={txtchange} value={textentChange} />
        </div>
        <div className="formContent">
          <label className="form-label">Other details</label>
          <br/>
          <input type="text" onChange={otherchange} value={otherEntChange} />
        </div>
        <div className="sub">
          <button type="submit" className="SubBtn" onClick={SubmitHandeler}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
