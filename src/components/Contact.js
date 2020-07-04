import React, { Component } from 'react'
import { Button } from 'antd';
import { List, Avatar } from 'antd';

 class Contact extends Component {
    render() {
    const   {id, name,email, phone} =this.props.contact
        return (
            <List 
            itemLayout="horizontal"
           dataSource={name}
         <List.Item>
         
         </List.Item>
        
            />
        )
    }
}

export default Contact
