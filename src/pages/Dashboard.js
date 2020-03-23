import React from 'react';
import { Bar } from 'react-chartjs-2';
import DeliverySummary from '../components/Dashboard/DeliverySummary';

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  datasets: [
    {
      label: 'Daily Revenue',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(220, 20, 60, 0.849)',
      borderColor: 'rgb(220, 20, 60)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 58, 71, 56, 55]
    }
  ]
};

const Dashboard = () => {
  return (
    <div>
      <div className="row col-md-12">
        <div className="col-md-7">
          <div>
            <DeliverySummary />
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <div className="shadow m-2">
              <div className="p-2">
                <Bar height={200} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
