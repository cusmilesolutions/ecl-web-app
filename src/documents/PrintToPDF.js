import React, {PureComponent} from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import NewOrders from "../components/Orders/Tables/NewOrders";
import OrdersOnDelivery from "../components/Orders/Tables/OrdersOnDelivery";
import DeliveredOrders from "../components/Orders/Tables/DeliveredOrders";
import CancelledOrders from "../components/Orders/Tables/CancelledOrders";

 class GeneratePDF extends PureComponent {
    constructor(props) {
        super(props);
    }
    // Function for generating pdf files
    jsPDFGenerator = ()=>{
        if (NewOrders){
            let doc = new jsPDF;
            let order_id = "#new_orders_table";
            doc.autoTable({
            html: order_id});
        doc.save('New Orders.pdf');
        }
        if (OrdersOnDelivery){
            let doc = new jsPDF;
            let order_id = "#orders_on_delivery_table";
            doc.autoTable({
            html: order_id});
        doc.save('Orders on delivery.pdf');
        }
        if (DeliveredOrders){
            let doc = new jsPDF;
            let order_id = "#delivered_orders_table";
            doc.autoTable({
            html: order_id});
        doc.save('Delivered orders.pdf');
        }
        if (CancelledOrders){
            let doc = new jsPDF;
            let order_id = "#cancelled_orders_table";
            doc.autoTable({
            html: order_id});
        doc.save('Cancelled orders.pdf');
        }
    };
    render() {
        return(
            <button className="btn-primary m-2 btn btn-sm" onClick={this.jsPDFGenerator}>Generate PDF</button>
        )
    }
}

export default GeneratePDF;