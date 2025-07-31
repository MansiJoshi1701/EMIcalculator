import { useState } from 'react'
import './App.css'

function App() {

  const [cost, setCost] = useState();
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [emi, setEmi] = useState(0);
  const [tenure , setTenure] = useState(0);


  const calculateEMI = () => {}

  const updateDownPayment = (e) => {

    if(!cost) return

    const EMI = Number(e.target.value);
    setEmi(EMI);

    //Calculate down payment and update it
    
  }

  const updateEMI = (e) => {

    if(!cost) return

    const DP = Number(e.target.value);
    setDownPayment(DP);

    //Calculate EMI and update it

  }


  return (
    <div className='App'>
      <span className='title' style={{ fontSize:30 , marginTop: 10}}>EMI Calculator</span>

      <span className='title'>Total Cost of Asset</span>
      <input 
        type="number"
        value={cost}
        onChange={e => setCost(e.target.value)}
        placeholder="Total Cost of Asset" 
      />

      <span className='title'>Interest (in %)</span>
      <input 
        type="number"
        value={interest}
        onChange={e => setInterest(e.target.value)}
        placeholder='Interest (in %)' 
      />

      <span className='title'>Processing Fee (in %)</span>
      <input 
        type="number"
        value={fee}
        onChange={e => setFee(e.target.value)}
        placeholder='Processing Fee (in %)' 
      />

      <span className='title'>Down Payment</span>
      <div>{downPayment}</div>
      <div>
        <input 
          type="range"
          min="0"
          max={cost}
          value={downPayment}
          onChange={updateEMI}
          className='slider'
        />
        <div className='lables'>
          <label>0%</label>
          <label>{downPayment}</label>
          <label>100%</label>
        </div>
      </div>


      <span className='title'>Loan per Month</span>
      <div>{emi}</div>
      <div>
        <input 
          type="range"
          min={calculateEMI(cost)}
          max={calculateEMI(0)}
          value={emi}
          onChange={updateDownPayment}
          className='slider'
        />
        <div className='lables'>
          <label>{calculateEMI(cost)}</label>
          <label>{emi}</label>
          <label>{calculateEMI(0)}</label>
        </div>
      </div>
      <span className='title'>Tenure</span>

    </div>
  )
}

export default App
