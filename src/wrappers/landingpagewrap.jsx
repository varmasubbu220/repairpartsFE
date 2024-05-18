
import { useState } from "react"
import SparesHome from "../components/sparesHome"
import Switch from '../items/switch'
const LandingpageWrapper=()=>{
    const [toggle,SetToggle]=useState(false)
    const handleToggle=(value)=>{
      SetToggle(value)
    }
    return(<>
       {!toggle?  <SparesHome /> :<>switch</>}
 <Switch toggle={toggle} toggleSetter={handleToggle}/>
    </>)
}

export default LandingpageWrapper;