import SpVechileFilter from "../filters/spvechfilter"
import Desknav from "../navbars/desknav"
import Switch from '../items/switch'
import Spbrands from "./spbrands"
import SpTopCategories from "./sptopcategories"
import Counts from "./counts"
import Footer from "../Footer/Footer"
import MobileAppLinks from "./mobileapplinks"
const SparesHome=({toggle,toggleSetter})=>{
    return(<>
    <Desknav/>
    <Switch toggle={toggle} toggleSetter={toggleSetter}/>
    <SpVechileFilter/>
    <Counts/>
    <Spbrands/>
    <SpTopCategories />
    <MobileAppLinks/>
    <Footer/>
    </>)
}
export default SparesHome