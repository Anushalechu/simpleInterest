import { Stack } from '@mui/material';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { useState } from 'react';


function App() {
  const [principle,setprinciple]= useState(0);
  // console.log("===principle amount===",principle);
  const[interest,setinterest]=useState(0);
  // console.log("==interest==",interest)
  const[year,setyear]= useState(0);
  // console.log("==year==",year);
  const[result,setResult]= useState(0)
  const [isPrinciple,setIsPrinciple]= useState(true)
  const [isinterest,setIsInterest]= useState(true)
  const [isyear,setIsYear]= useState(true)
  const calculateinterest=(e)=>{
    e.preventDefault();
    const result =(principle*interest*year)/100;
    console.log("total interest=",result);
    setResult(result)
  }
  const handleReset=()=>{
    setprinciple(0);
    setyear(0);
    setinterest(0);
    setResult(0);
  }
  const validate=(e)=>{
    const{name, value}=e.target;
    if(name==='principlevalue'){
      setprinciple(value);
      let res =(!!value.match(/^[0-9]+$/));
      if(res ==true){
        setIsPrinciple(true)
      }
      else{
        setIsPrinciple(false)
      }
    }
    else if(name=='interestvalue'){
       setinterest(value);
       let res =(!!value.match(/^[0-9]+$/));
       if(res ==true){
        setIsInterest(true)
      }
      else{
         setIsInterest(false)
        }
    }
    else{
      setyear(value);
      let res =(!!value.match(/^[0-9]+$/));
      if(res ==true){
       setIsYear(true)
     }
     else{
        setIsYear(false)
       }
   }
  }
  return (
  <>
  <div className='d-flex justify-content-center align-items-center w-100 mt-5 ' style={{height:"90vh"}}>
    <div className='bg-light p-5 rounded' style={{width:"500px"}}>
    <h1>Simple Interest</h1>
    <p>Calculate your simple interest</p>
    <div style={{height:"150px"}} className=' flex-column bg-warning pt-3 rounded d-flex justify-content-center align-items-center'>
      <h2>&#8377;{result}</h2>
      <p>Total simple interest</p>
    </div>
    <form action="" className='mt-3' onSubmit={calculateinterest}>
      <TextField className='w-100' id="outlined-basic" label="&#8377;Principle amount" variant="outlined" 
     value={principle}
     name="principlevalue"
      onChange={(e)=>validate(e)}/>
      {
        !isPrinciple &&
        <div>
          <p className='text-danger'>Invalid input</p>
        </div>
      }
      <TextField className='w-100 mt-3' id="outlined-basic" name='interestvalue' label="Rate of interest(p.a)%" variant="outlined" 
     value={interest} onChange={(e)=>validate(e)}/>
     {
      !isinterest &&
      <div>
        <p className='text-danger'>Invalid input</p>
      </div>
     }

      <TextField className='w-100 mt-3' id="outlined-basic" name='yearvalue' label="year(yr)" variant="outlined" 
     value={year} onChange={(e)=>validate(e)}/>
       {
      !isyear &&
      <div>
        <p className='text-danger'>Invalid input</p>
      </div>
     }
       <Stack direction="row" spacing={2} className='mt-3'>
          <Button disabled={isPrinciple && isinterest && isyear?false:true} variant="contained" className='bg-success' style={{height:'50px',width:'200px'}} type='submit'>Calculate</Button>
          <Button variant="contained" className='bg-light' style={{height:'50px',width:'200px', color:'blue'}} onClick={handleReset} >Reset</Button>
       </Stack>
    </form>
   
    </div>
  </div>
  </>
  );
}

export default App;