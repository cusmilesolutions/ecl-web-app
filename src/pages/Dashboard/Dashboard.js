import React, { useContext } from 'react';
import DeliverySummary from '../../components/Dashboard/DeliverySummary';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router';
import WeeklyRevenue from '../../components/Graphs/WeeklyRevenue';
import Todo from '../../components/Dashboard/Todo';

const Dashboard = () => {
  const { state } = useContext(AuthContext);
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div style={{ backgroundColor: '#F7F7F7' }} className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div>
                <DeliverySummary />
              </div>
            </div>
            <div className="col-md-5">
              <div className="shadow-sm mt-3 bg-white">
                <div className="p-2">
                  <WeeklyRevenue />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 shadow-sm mt-3 bg-white"> <Todo /> </div>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
};

export default Dashboard;
