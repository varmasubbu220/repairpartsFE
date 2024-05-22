import SpVechileFilter from "../filters/spvechfilter"
import Desknav from "../navbars/desknav"
import Switch from '../items/switch'
import Spbrands from "./spbrands"
import SpTopCategories from "./sptopcategories"
const SparesHome=({toggle,toggleSetter})=>{
    return(<>
    <Desknav/>
    <Switch toggle={toggle} toggleSetter={toggleSetter}/>
    <SpVechileFilter/>
    <Spbrands/>
    <SpTopCategories/>
    </>)
}
export default SparesHome