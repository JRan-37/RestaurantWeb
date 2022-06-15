import React, { Component } from 'react';
import './Offer.css';
import Toolbar from '../../Components/navigation/toolbar/toolbar';
import { NavLink } from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap';
import Tile from '../../Components/sections/section-tiles/tile/tile';
import Flip from '../../Components/miscelleous/flip-card/flip-card';
import Footer from '../../Components/navigation/footer/footer';
import axios from 'axios';

class Offer extends Component {

    state ={
        categories: [],
        options: [],
        load: "Select From Above",
        showCustomize: false,
        sendData: {}
    }
    componentDidMount() {
        axios.get("http://localhost:8081/rewards").then((response) => {
            this.setState({menudata:response.data});
            console.log(this.menudata);
        }).catch(err=>console.log("Didn't load")).then(console.log("Unable to get data for menu categories"));
    }

    render() {
        let temp;
    const extractor=(obj)=>{
         temp=Object.keys(obj).map(name=>obj[name]);
    }
    extractor(this.props.data.cards);
        return (
            <div className="Offer">
                <section className="Offers">
                    <Toolbar count={this.props.count} />
                    <p className="OffersHead">Rewards</p>
                    <div>
                        menudata
                        {/* <NavLink to="/">Home</NavLink>
                        <NavLink exact to="/menu">Menu</NavLink>
                        <NavLink to="/offers">Offers</NavLink> */}

                        {/* you would have to have the spring boot application running concurrently on your computer... 
                        then the http address for the call would be http://localhost:8080/api/menu  or 
                        http://localhost:8080/rewards later on once that functionality gets added */}
                    </div>
                </section>
                <section style={{marginTop:"40px"}}>
                    <Container>
                        <Row>
                           {temp.map(each=><Col key={each.head}><Tile url="/menu" button="Visit Menu" head={each.head} content={each.content} key={each.head} back={each.back} /></Col>)}
                        </Row>
                    </Container>
                </section>
                <section style={{marginTop:"40px"}}>
                    <Flip lis={this.props.board}/>
                </section>
                <Footer count={this.props.count}/>
            </div>
        );
    }
}

export default Offer;