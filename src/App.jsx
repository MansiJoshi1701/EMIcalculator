import { useState } from 'react'
import './App.css'

function App() {

  const [cost, setCost] = useState();
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [emi, setEmi] = useState(0);
  const [tenure , setTenure] = useState(0);

  return (
    <div className='App'>
      <span className='title' style={{ fontSize:30 , marginTop: 10}}>EMI Calculator</span>

      <span className='title'>Total Cost of Asset</span>
      <input 
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
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
      {/* slider */}

      <span className='title'>Loan per Month</span>
      {/* slider */}

      <span className='title'>Tenure</span>

    </div>
  )
}

export default App
