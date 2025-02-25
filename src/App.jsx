import { useState } from "react"
import Headar from "./componats/Header"
import UserInput from "./componats/User_Input"
import Results from "./componats/Rrsults"

function App() {
  const [userInput , setUserInput]= useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})
const inputIsVaild = userInput.duration >= 1 ;
function handelChange( inputIdentifier ,newValue){
    setUserInput( prev => {
        return{
            ...prev,
            [inputIdentifier]: +newValue
        }
    })
}
  return (
   <>
    <Headar/>
    <UserInput userInput ={userInput} onChangeInput={handelChange}/>
    { ! inputIsVaild && <p className="center">
      Please enter a duration greetar than Zero.
      </p>}
    {inputIsVaild && <Results input ={userInput}/>}
   </>
  )
}

export default App
