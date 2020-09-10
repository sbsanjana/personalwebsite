import React from 'react';
import Prof from './pics/sanjana.png'
import { Row, Col } from 'antd';
export default class About extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.body.style = 'background: #F1F5F9';
        //F8F2F3';

    }


    render() {


        return (
            <div>
            <h1 className = 'title' style={{fontSize: 100, marginBottom: -5}}>ABOUT ME</h1 >
            <Row justify="center" style={{marginBottom: 20}}>
                <Col xl={{span: 12}}>
                    <img src={Prof} style={{width:200, height:200}} />
                </Col>
            </Row>
            <Row justify="center">
                <Col xl={{span:16}}>

                <p style={{fontSize: 20}}>I'm a rising 3rd year CS major ar Georgia Tech with a minor in Industrial Design! My concntrations in CS are Intelligence (AI/ML) and People (Human-Computer Interaction). Once I graduate in December 2021, I will continue my education at GT as a part of the BS/MS program where I will earn my Master's in CS with a concentration in Human-Computer Interaction. </p>
                <br />
                <p style={{fontSize: 20}}>If I'm not stuck behind a computer coding, studying, or finding the next big problem to crack, you'll likely find me either reading in any aesthtically pleasing coffeeshop in Atlanta or painting! If you want to reach out to me, feel free to email me at sbsanjana@gmail.com, or connect with me on LinkedIn! </p>
                <br />
                <p style={{fontSize: 20}}> If you want to know even more about what I've done, feel free to check out my resume or the projects section! </p>
                </Col>

               
            </Row>
            </div>
            
        )
    }
}