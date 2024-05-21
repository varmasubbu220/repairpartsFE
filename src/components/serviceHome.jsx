
import Switch from '../items/switch'
import ServiceNav from '../navbars/servicenav';
const ServiceHome=({toggle,toggleSetter})=>{
    return (<>
    <ServiceNav/>
        <Switch toggle={toggle} toggleSetter={toggleSetter}/>
    </>)
}
export default ServiceHome;