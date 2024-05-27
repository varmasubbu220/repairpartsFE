
import Footer from '../Footer/Footer';
import ServiceCorousel from '../courosels/servicemainCourosel';
import Switch from '../items/switch'
import ServiceNav from '../navbars/servicenav';
const ServiceHome=({toggle,toggleSetter})=>{
    return (<>
    <ServiceNav/>
    <Switch toggle={toggle} toggleSetter={toggleSetter}/>
    <ServiceCorousel/>
    <Footer/>
    </>)
}
export default ServiceHome;