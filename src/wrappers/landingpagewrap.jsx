
import { useState } from "react"
import SparesHome from "../components/sparesHome"
import ServiceHome from '../components/serviceHome'
const LandingpageWrapper=()=>{
    const [toggle,SetToggle]=useState(false)
    const handleToggle=(value)=>{
      SetToggle(value)
    }
    return(<>
       {!toggle? <SparesHome toggle={toggle} toggleSetter={handleToggle} /> :<><ServiceHome toggle={toggle} toggleSetter={handleToggle}/></>}
   
    </>)
}

export default LandingpageWrapper;