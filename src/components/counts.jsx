import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  { title: 'Satisfied Clients', count: 1840494 },
  { title: 'Parts We Have', count: 899 },
  { title: 'Deliveries Per Day', count: 3433 },
  { title: 'Avg Delivery Time', count: 30, suffix: ' min' },
];

const Counts = () => {
  const [counts, setCounts] = useState(data.map(item => ({ ...item, displayCount: 0 })));

  useEffect(() => {
    counts.forEach((item, index) => {
      const increment = item.count / 100;
      const interval = setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index].displayCount < newCounts[index].count) {
            newCounts[index].displayCount = Math.min(newCounts[index].displayCount + increment, newCounts[index].count);
          } else {
            clearInterval(interval);
          }
          return newCounts;
        });
      }, 40);
    });
  }, []);

  return (
    <div className="container my-4">
      <div className="text-start mt-3">
        <p className="h4 mb-3" style={{ fontFamily: 'cursive', color: '#007bff' }}>
          <span style={{ color: '#0dcaf0' }}>Key</span> Statistics
        </p>
      </div>
      <div className="row justify-content-center">
        {counts.map((item, index) => (
          <div key={index} className="col-sm-6 col-md-3 mb-3">
            <div className="card count-card">
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{Math.floor(item.displayCount) + (item.suffix || '')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .count-card {
          transition: transform 0.3s, background-color 0.3s;
          cursor: pointer;
          max-width: 200px;
          margin: 0 auto;
        }
        .count-card:hover {
          transform: scale(1.05);
          background-color: rgb(0, 123, 255);
          color: white; 
        }
      `}</style>
    </div>
  );
};

export default Counts;
