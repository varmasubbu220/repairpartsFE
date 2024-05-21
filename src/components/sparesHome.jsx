import SpVechileFilter from "../filters/spvechfilter"
import Desknav from "../navbars/desknav"
import Switch from '../items/switch'
const SparesHome=({toggle,toggleSetter})=>{
    return(<>
    <Desknav/>
    <Switch toggle={toggle} toggleSetter={toggleSetter}/>
    <SpVechileFilter/>
    </>)
}
export default SparesHome