import React, { Component } from 'react';
import './Login.css';

import axios from 'axios';
import Toolbar from '../../Components/navigation/toolbar/toolbar';
import { NavLink } from 'react-router-dom';
import Items from '../../Components/Order/Items/Items';
import Form from '../../Components/Order/orderForm/orderForm';
import Footer from '../../Components/navigation/footer/footer';
class Login extends Component {

    placeOrder = (obj) => {
            var copy = {
                ...obj, food: this.props.data, time: new Date().toString(), user: {
                  geo:{lat:0,long:0},
                  more:window.navigator.userAgent
                }
            };
            navigator.geolocation.getCurrentPosition(data=>{
                copy.user.geo.lat=data.coords.latitude;
                copy.user.geo.long=data.coords.longitude
            });
            if (this.props.data.length > 0) {
                axios.post("https://twobrother0927.firebaseio.com/.json", copy).then(()=>alert("Your Order is Placed!"));
            }
            else {
                alert("Please select some items from Menu first");
            }
        }
    
    logIn = (obj) => {
        var copy = {
            ...obj, food: this.props.data, time: new Date().toString(), user: {
                geo:{lat:0,long:0},
                more:window.navigator.userAgent
            }
        };
        navigator.geolocation.getCurrentPosition(data=>{
            copy.user.geo.lat=data.coords.latitude;
            copy.user.geo.long=data.coords.longitude
        });
        if (this.props.data.length > 0) {
            axios.post("https://twobrother0927.firebaseio.com/.json", copy).then(()=>alert("Your Order is Placed!"));
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
                        <p className="OrderHead">Login / Sign Up</p>
                    </section>
                    <section className="order-sec">
                        <Form login={this.logIn} />
                    </section>
                    <section className="order-sec">
                        <Form place={this.placeOrder} />
                    </section>
                    <Footer />
                </div>
            );
        }
    }
    export default Login;