import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['James', 'Prince', 'Emmanuel'],
  datasets: [
    {
      label: 'Riders(Today)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#50C2C3',
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
      data: [4, 3, 6, 8, 9, 15],
    },
  ],
};

const RiderDaily = () => {
  return <Bar height={200} data={data} />;
};

export default RiderDaily;
