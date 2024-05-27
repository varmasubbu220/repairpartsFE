import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SpVehicleFilter = () => {
    const handleShowModal = () => {
        const modal = new window.bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    };

    return (
        <div className="container">
            <div className='text-center'>
                <p className="h4 mb-3" style={{ color: '#007bff' }}>Find Parts by Vehicle</p>
            </div>
            <div className="row justify-content-between pt-3 border rounded">
                <div className="col-auto">
                    <select className="form-select form-select-sm mb-3" aria-label="Default select example">
                        <option selected>Vehicle</option>
                        <option value="1">Car</option>
                        <option value="2">Bike</option>
                        <option value="3">Lorry</option>
                        <option value="4">Jeep</option>
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
                    <select className="form-select form-select-sm mb-3" aria-label="Default select example">
                        <option selected>Part</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-auto mb-3 mb-sm-0">
                    <button type="button" className="btn btn-sm btn-info px-4" onClick={handleShowModal}>Go</button>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <h5 className="modal-title" id="productModalLabel">Product Details</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><strong>Product Name:</strong> Example Part</p>
                            <p><strong>Description:</strong> This is a detailed description of the example part.</p>
                            <p><strong>Price:</strong> $99.99</p>
                            <p><strong>Availability:</strong> In Stock</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpVehicleFilter;
