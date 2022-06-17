import React,{Component} from 'react';
import './orderForm.css';
import {Container,Row,Col} from 'reactstrap';

class  orderForm extends Component{
    state={
        name:"",
        zipCode:"",
        address1:"",
        city:"",
        state:"",
        address2:""
    }
    nameHandler=(e)=>{
        this.setState({name:e.target.value});
    }
    phoneHandler=(e)=>{
        this.setState({zipCode:e.target.value});
    }
    houseHandler=(e)=>{
        this.setState({address1:e.target.value});
    }
    localityHandler=(e)=>{
        this.setState({address2:e.target.value});
    }
    pincodeHandler=(e)=>{
        this.setState({state:e.target.value});
    }
    landHandler=(e)=>{
        this.setState({city:e.target.value});
    }
    render(){
        var checkOut={
            name:this.state.name,
            zipCode:this.state.zipCode,
            address1:this.state.address1,
            address2:this.state.address2,
            city:this.state.city,
            state:this.state.state
        };
        return(
        <div className="OrderForm">
        <p className="OrderFormHead">Fill Delivery Details</p>
            <form id="orderForm">
                <div className="form__container">
                <Container>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Name</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.name} onChange={this.nameHandler} required id="CustomerName"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Address</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.address1} onChange={this.houseHandler} required id="HouseNumber"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Address 2</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.address2} onChange={this.localityHandler} required id="Locality"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>City</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.city} onChange={this.landHandler} required id="LandMark"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>State</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.state} onChange={this.pincodeHandler} required id="PinCode"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Zip Code</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.zipCode} onChange={this.phoneHandler} required id="Number"/>
                        </Col>
                    </Row>
                </Container>
                </div>
                <button type="button" onClick={()=>this.props.place({checkOut})}>Place Order</button>
            </form>
            
            <p className="OrderFormNotice">*Payment will be takes as Cash On delivery</p>
        </div>
    );
}
}

export default orderForm;