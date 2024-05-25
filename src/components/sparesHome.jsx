import SpVechileFilter from "../filters/spvechfilter"
import Desknav from "../navbars/desknav"
import Switch from '../items/switch'
import Spbrands from "./spbrands"
import SpTopCategories from "./sptopcategories"
import Counts from "./counts"
const SparesHome=({toggle,toggleSetter})=>{
    return(<>
    <Desknav/>
    <Switch toggle={toggle} toggleSetter={toggleSetter}/>
    <SpVechileFilter/>
    <Counts/>
    <Spbrands/>
    <SpTopCategories/>
    </>)
}
export default SparesHome