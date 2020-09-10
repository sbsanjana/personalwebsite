import React from 'react'
import { FileTextOutlined } from '@ant-design/icons';


export default class Resume extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        document.body.style = 'background: #F1F5F9;';

    }


    render() {
        return (
            <div>
                <h1 className = 'title' style={{fontSize: 100, marginBottom: -5}}>RESUME</h1 >

                <p style={{fontSize: 25}}> You can view my resume using the link below!</p> 
                <FileTextOutlined style={{fontSize: 100}} key="select" onClick={() => window.location.href = 'https://drive.google.com/file/d/1h0pss3WZ2_US_aYeHkxgx8Qq5FzAP5Yk/view'}/>

            </div>
        )
    }
}