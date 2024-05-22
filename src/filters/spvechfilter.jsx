import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SpVehicleFilter = () => {
    return (
        <div className="container">
            <div className='text-center'>
            <p className="h4 mb-3" style={{ color: '#007bff' }}>Find Parts by Vehicle</p>
            </div>
            {/* <hr/> */} 
            <div className="row justify-content-between pt-3 border rounded">
                <div className="col-auto">
                    <select className="form-select form-select-sm mb-3" aria-label="Default select example"  >
                        <option selected>Vehicle</option>
                        <option value="1">Car</option>
                        <option value="2">Bike</option>
                        <option value="3">Lorry</option>
                        <option value="3">Zeep</option>
                    </select>
                </div>
                <div className="col-auto">
                    <select className="form-select form-select-sm mb-3" aria-label="Default select example">
                        <option selected>Vehicle-Brand</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-auto">
                    <select className="form-select form-select-sm mb-3" aria-label="Default select example">
                        <option selected>Model</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-auto">
                    <select className="form-select form-select-sm mb-3" aria-label="Default select example">
                        <option selected>Year</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-auto">
                    <select className="form-select form-select-sm  mb-3" aria-label="Default select example">
                        <option selected>Part</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-auto mb-3 mb-sm-0"> 
                <button type="button"  className="btn btn-sm btn-info px-4"> Go </button>
                </div>
            </div>
        </div>
    );
}

export default SpVehicleFilter;
