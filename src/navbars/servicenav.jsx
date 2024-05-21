import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import servicelogo from '../asserts/servicelogo.png';

import DensitySmallIcon from '@mui/icons-material/DensitySmall';
const ServiceNav=()=>{


    return(<>
        <div className='container-fluid d-flex align-items-center justify-content-between' style={{ 
      background: "linear-gradient(135deg, rgba(160, 222, 255, 1) 0%, rgba(0, 123, 255, 1) 100%)", 
      height: "15vh",
      padding: '0 20px'
    }}>
      <div className='d-flex flex-column align-items-center' style={{ width: "26%", height: '100%' }}>
        <img src={servicelogo} alt="Repair Parts Logo" className='img-fluid' style={{ height: '95%', width: '65%', }} />
       
      </div>
      
      <div className='d-none d-sm-flex align-items-center justify-content-between' style={{ width: "30%", height: '100%' }}>
    
        <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
          <button type="button" className="btn btn-primary">Login</button>
        </div>
      </div>
      <div className='d-sm-none'>
        <DensitySmallIcon />
      </div>
    </div>
    </>)
}
export default ServiceNav;