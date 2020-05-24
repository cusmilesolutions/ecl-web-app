import React, { useContext } from 'react';
import DeliverySummary from '../../components/Dashboard/DeliverySummary';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router';
import WeeklyRevenue from '../../components/Graphs/WeeklyRevenue';
import Todo from '../../components/Dashboard/Todo';
import RiderDaily from '../../components/Graphs/RidersDaily';
import TodayRevenue from '../../components/Graphs/TodayRevenue';

const Dashboard = () => {
  const { state } = useContext(AuthContext);
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <Todo />
          <div>
            <DeliverySummary />
          </div>
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
