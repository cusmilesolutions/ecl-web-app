import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

import DeliverySummary from '../../components/Dashboard/DeliverySummary';
import RiderDaily from '../../components/Dashboard/Graphs/RidersDaily';
import TodayRevenue from '../../components/Dashboard/Graphs/TodayRevenue';
import WeeklyRevenue from '../../components/Dashboard/Graphs/WeeklyRevenue';
import TaskManagement from '../../components/Dashboard/TaskManager';

const Dashboard = () => {
  const { state } = useContext(AuthContext);
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <div>
            <DeliverySummary />
          </div>
          <TaskManagement />
          <div className="row">
            <div className="col-md-4">
              <div className="p-2 shadow-sm mt-3 bg-white">
                <TodayRevenue />
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-2 shadow-sm mt-3 bg-white">
                <RiderDaily />
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-2 shadow-sm mt-3 bg-white">
                <WeeklyRevenue />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
};

export default Dashboard;
