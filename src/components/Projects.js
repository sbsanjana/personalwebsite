import React from 'react'
import { Card, Avatar, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SelectOutlined } from '@ant-design/icons';

export default class Projects extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { Meta } = Card;

        return (


            <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src= {this.props.pic}
              />
            }
            actions={[
              <SelectOutlined key="select" onClick={this.props.link}/>,

            ]}
          >
            <Meta
                style={{height:150}}
              title={this.props.title}
              description={this.props.desc}
            />
          </Card>
      
        )

        }
}