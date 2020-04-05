import React, { useContext } from 'react';
import DeliverySummary from '../../components/Dashboard/DeliverySummary';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router';
import WeeklyRevenue from '../../components/Graphs/WeeklyRevenue';

const Dashboard = () => {
  const { state } = useContext(AuthContext);
  return (
    <React.Fragment>
      {state.isAuth ? (
        <div>
          <div className="row col-md-12">
            <div className="col-md-7">
              <div>
                <DeliverySummary
                // totalCancelledOrders={totalCancelledOrders}
                // totalDeliveredOrders={totalDeliveredOrders}
                // totalOrders={totalOrders}
                // totalOrdersOnDelivery={totalOrdersOnDelivery}
                />
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <div className="shadow m-2">
                  <div className="p-2">
                    <WeeklyRevenue />
                  </div>
                </div>
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
