import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MobileAppLinks = () => {
    return (
        <div className="container mt-4 mb-4">
            <div className="bg-light p-4 rounded shadow" style={{ minHeight: '200px' }}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>Download our mobile app</h2>
                        <p>Get our app for the best experience on your mobile device.</p>
                    
                    </div>
                    <div className=" d-flex justify-content-between col-md-5 text-md-right  ">
                        <a href="https://play.google.com/store/apps" className="btn btn-primary mr-2">Download for Android</a>
                        <a href="https://www.apple.com/app-store/" className="btn btn-secondary">Download for iOS</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileAppLinks;
