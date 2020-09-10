import React from 'react'
import { Breadcrumb, Menu } from 'antd';


export default class BreadMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    underline() {

    }

    render () {
        return (
            <Breadcrumb className='name' style={{fontSize: 25}} separator=" | ">
            <Breadcrumb.Item href="#/home" >
                Home
            </Breadcrumb.Item>

            <Breadcrumb.Item href="#/about">
              About
            </Breadcrumb.Item>

            <Breadcrumb.Item href="#/projects">
              Projects
            </Breadcrumb.Item>

            <Breadcrumb.Item href="#/resume">
              Resume
            </Breadcrumb.Item>

          </Breadcrumb>

                )
    }
}