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
          {
            label: "Today's Revenue",
            backgroundColor: ['#51A846', '#3DA3B9', '#DD4145'],
            borderWidth: 1,
            borderColor: ['#51A846', '#3DA3B9', '#DD4145'],
            data: [13, 43, 23],
          },
        ],
      }}
      height={200}
    />
  );
};
export default TodayRevenue;
