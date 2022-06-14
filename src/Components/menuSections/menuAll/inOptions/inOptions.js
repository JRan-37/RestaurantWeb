import React from 'react';
import './inOptions.css';
import Inoption from './inOption/inOption';
import {Container,Row,Col} from 'reactstrap';
let toShow=[];
const inOptions =(props)=>{
    if(props.data!==undefined && props.data!==null){
        
        toShow=Object.keys(props.data).map(id=>{
            let cnt=props.data[id].description!==undefined?props.data[id].description:null;
            let img=props.data[id].imgPath!==undefined?props.data[id].imgPath:"https://media.timeout.com/images/103462914/image.jpg";
            if(props.data[id].category === props.selected) {
           return (<Col key={id}>
           <Inoption add={props.adding}  head={props.data[id].name} image={img} price={props.data[id].price} content={cnt} />
           </Col>
            )
           }
        })
    }
    return(
        <div className="inOptions">
        <p className="inOptionsHead">{props.selected}</p>
        <Container>
        <Row>
            {toShow}
            </Row>
            </Container>
        </div>
    );
}

export default inOptions;