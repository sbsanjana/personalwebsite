import React from 'react';
import Type from './Type.js'
import {Row, Col} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faGithubAlt,
    faLinkedin,
    faTwitter,
    faGithub
  } from '@fortawesome/free-brands-svg-icons';


export default class Landing extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.body.style = 'background: #C5D7E7';
        //#F8E6C9;';

    }


    render () {

        return (
            <div className='backgroundHome'style={{justifyContent: 'left', marginTop: 30}}>
                <Row>
                <Col span={8} style={{display: 'flex', marginRight: 'auto'}}>
                        <p className='name' style={{fontSize:30}}>Hi! I'm</p>
                    </Col>
                </Row>
                <Row>
                
                    <Col span={16} style={{display: 'flex', marginRight: 'auto'}}>

                        <h1 className = 'title' style={{fontSize: 100, marginBottom: -1, marginTop:-30}}>SANJANA BADHYA</h1 >
                
                    </Col>

                </Row>
                <Row>
                <Col span={4} style={{display: 'flex', marginRight: 'auto'}}>
                    <Type />
                    </Col>
                </Row>

                <Row style={{marginTop: 100}}>
                    <Col span={8} style={{display: 'flex', marginRight: 'auto'}}>
                    <FontAwesomeIcon lg icon={faGithub} style={{marginRight: 10, cursor: 'pointer'}}size="4x" onClick={() => window.location.href='http://www.github.com/sbsanjana'}/>
                    <FontAwesomeIcon lg icon={faLinkedin} style={{marginRight: 10, cursor: "pointer"}} size="4x" onClick={() => window.location.href='https://www.linkedin.com/in/sanjanabadhya/'}/>
                    <FontAwesomeIcon lg icon={faEnvelope} style={{marginRight: 10, cursor: "pointer"}} size="4x" onClick={() => window.location.assign("mailto:sbsanjana@gmail.com")}/>

                    </Col>
                </Row>
       

            </div>


        )
    }

}