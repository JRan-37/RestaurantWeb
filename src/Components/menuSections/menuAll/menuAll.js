import React, { Component } from "react";
import "./menuAll.css";
import Single from "./singleContain/single";
import Inoptions from "../menuAll/inOptions/inOptions";
import Modal from "../../navigation/modal/modal";
import Backdrop from "../../navigation/backdrop/backdrop";
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import axios from "axios";

class menuAll extends Component {
  state = {
    categories: [],
    options: [],
    load: "Select From Above",
    showCustomize: false,
    sendData: {},
  };
  openCustomizeHandler = (obj) => {
    this.setState({ showCustomize: true });
  };
  closeCustomizationHandler = () => {
    this.setState({ showCustomize: false });
  };
  loadStateHandler = (name) => {
    this.setState({ load: name, sendData: this.props.menudata });
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/menu/categories")
      .then((response) => {
        this.setState({ categories: response.data });
        console.log(this.categories);
      })
      .catch((err) => console.log("Didn't load"))
      .then(console.log("Unable to get data for menu categories"));
  }

  render() {
    //let menuitems = this.props.menudata.map(item => <Single name={item.category} key={item.category} click={this.loadStateHandler} />);
    let menuitems = Object.keys(this.props.menudata).map((id) => (
      <Single
        name={this.props.menudata[id].category}
        key={this.props.menudata[id].id}
        click={this.loadStateHandler}
      />
    ));
    let menucategories = Object.keys(this.state.categories).map((id) => (
      <Single
        name={this.state.categories[id].category}
        key={this.state.categories[id].category}
        click={this.loadStateHandler}
      />
    ));
    //var arr = removeDuplicatesBy(x => x.price, menuitems);
    //menuitems.filter((v,i,a)=>a.findIndex(v2=>(v2.category===v.category))===i.cat);
    //let opn = Object.keys(this.props.data).map(data => <Single  name={data} click={this.loadStateHandler}  key={data} />);
   
    let outPut = (
      <div className="menuAll">
        {/*opn*/}
        {menucategories}
        <Inoptions
          adding={this.props.adding}
          selected={this.state.load}
          data={this.state.sendData}
          customization={this.openCustomizeHandler}
          check={menuitems}
        />
      </div>
    );
    return (
      <div>
        <Container>
          <Row>
            <Col>{outPut}</Col>
          </Row>
        </Container>
        <div className="spacer" />
      </div>
    );
  }
}

export default menuAll;
