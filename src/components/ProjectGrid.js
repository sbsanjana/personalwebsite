import React from 'react'
import Project from './Projects.js'
import { Row, Col } from 'antd'
import collective from './pics/collect.png'
import koble from './pics/koble.jpg'
import st from './pics/st.jpg'
import berlin from './pics/berlin.jpg'
import tech from './pics/tech.jpg'
import site from './pics/site.png'


export default class ProjectGrid extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        document.body.style = 'background: #F1F5F9';
        //F1FAEE';
        //E6F0EB';

    }



    render () {
        return (
            <div>
                <h1 className = 'title' style={{fontSize: 100, marginBottom: -5}}>PROJECTS</h1 >

                <Row gutter={[48, 24]}>
                    <Col xl = {{span: 8}}>
                        <Project 
                        title = "Collective"
                        desc = "Designed to help those in the tech field, especially those who are traditionally underrepresented, network, find resources, and share skills."
                        pic = {collective}
                        link={() => window.location.href='https://github.com/sbsanjana/collective'}
                        />
                    </Col>

                    <Col xl = {{span: 8}}>
                        <Project 
                        title = "Travel Berlin"
                        desc = "A web-based application created for users to explore, review, and interact with different attractions throughout the city of Berlin."
                        pic = {berlin}
                        link = {() => window.location.href='https://github.com/sbsanjana/TravelBerlin'}
                        />
                    </Col>


                    <Col xl = {{span: 8}}>
                        <Project 
                        title = "Smart Tasking"
                        desc = "A web-application built with ReactJS to simplify time-management through a smart ranking system to organize and color-code tasks."
                        pic = {st}
                        link = {() => window.location.href='https://github.com/sbsanjana/smart-tasking'}
                        />
                    </Col>
                </Row>

                <Row gutter={[48, 24]}>
                    <Col lg = {{span: 8}}>
                        <Project 
                        title = "Koble"
                        desc = "A web application built to reduce farmers’ food wastage and serve underserved food deserts in the midst of Covid-19."
                        pic = {koble}
                        link = {() => window.location.href="https://devpost.com/software/koble-sz863j"}
                        />
                    </Col>

                    <Col lg = {{span: 8}}>
                        <Project 
                        title = "Avanoa"
                        desc = "Built to increase accessibility on GT campus through easy reporting of building issues that may impede it. Prototyped in AdobeXD."
                        pic = {tech}
                        link = {() => window.location.href = 'https://drive.google.com/file/d/1lSAxmOTcdD_hGzql2RnZPqi6JLPBDbnf/view?usp=sharing'}
                        />
                    </Col>

                    <Col lg = {{span: 8}}>
                        <Project 
                        title = "This Website"
                        desc = "This wesbite is built with ReactJS."
                        pic = {site}
                        />
                    </Col>
                </Row>

            </div>
        )
    }
}




