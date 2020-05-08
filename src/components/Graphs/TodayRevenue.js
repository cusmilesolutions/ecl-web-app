import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  datasets: [
    { labels: ['Delivered', 'On Delivery', 'Cancelled'], data: [10, 20, 49] },
  ],
};

const TodayRevenue = () => {
  return (
    <Doughnut
      data={{
        labels: ['Delivered', 'On Delivery', 'Cancelled'],
        datasets: [
          { backgroundColor: '#1983C8', data: 10 },
          { backgroundColor: '#886CFD', data: 6 },
          { backgroundColor: '#50C2C3', data: 8 },
        ],
      }}
      height={200}
    />
  );
};
export default TodayRevenue;
