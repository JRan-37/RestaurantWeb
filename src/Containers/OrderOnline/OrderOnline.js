import React, { Component } from 'react';
import './OrderOnline.css';

import axios from 'axios';
import Toolbar from '../../Components/navigation/toolbar/toolbar';
import { NavLink } from 'react-router-dom';
import Items from '../../Components/Order/Items/Items';
import Form from '../../Components/Order/orderForm/orderForm';
import Footer from '../../Components/navigation/footer/footer';
class OrderOnline extends Component {

    placeOrder = (obj) => {

            let date = new Date();
            let month = date.getMonth();
            let day = date.getDay();
            let year = date.getFullYear();

            let total = this.props.data[0].price;

            let copy = {
                date : month + "/" + day + "/" + year,
                price : total,
                username : "joejoe1",
                menuId : this.props.data[0].id
            }

            console.log(this.props.data);
            
            if (this.props.data.length > 0) {
                axios.post("http://localhost:8080/purchase", copy).then(()=>alert("Your Order is Placed!"));
            }
            else {
                alert("Please select some items from Menu first");
            }
        }


        render() {
            return (
                <div className="OrderOnline">
                    <section className="Order">
                        <Toolbar count={this.props.count} />
                        <p className="OrderHead">Order Online</p>
                        <div>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/menu">Menu</NavLink>
                            <NavLink to="/order">Order Online</NavLink>
                        </div>
                    </section>
                    <section className="Orderitems">
                        <Items data={this.props.data} />
                    </section>
                    <section className="order-sec">
                        <Form place={this.placeOrder} />
                    </section>
                    <Footer />
                </div>
            );
        }
    }
    export default OrderOnline;