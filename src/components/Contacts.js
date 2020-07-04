import React, { Component } from 'react'
import {Consumer} from '../context';
//import Contact from './Contact'
import { List, Avatar, Row, Col } from 'antd';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'

export class Contacts extends Component {

    onDeleteClick = async (item, dispatch) => {
        const id=item.id
        //const name=item.name
        toast.success("wow user delete")
        try {
            //console.log(name)
          await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
          dispatch({ type: 'DELETE_CONTACT', payload: id });
          //toast.success("wow user delete", name)
         
        } catch (e) {
          dispatch({ type: 'DELETE_CONTACT', payload: id });
        }
      };
    render() {
        return (
          <Row style={{marginTop:'50px'}}>
            <Col span={12} offset={6}>  
            <Consumer>
                { value =>{
                    const {dispatch,contacts} =value 
                    console.log(contacts)
                    return(
                        <React.Fragment>
            <List
        className="demo-loadmore-list"
          itemLayout="horizontal"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={contacts}

          renderItem={item => (
      <List.Item
      actions={[<Link to={`/edit/${item.id}`}>
      <i
        className="fas fa-pencil-alt"
        style={{
          cursor: 'pointer',
          float: 'right',
          color: 'black',
          marginRight: '1rem'
        }}
      />
    </Link>,
      <i key="list-loadmore-more" 
       className="fas fa-trash"
       style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          onClick={this.onDeleteClick.bind(this,item, dispatch)}
      />]} 
      >
    

        <List.Item.Meta
        
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="/!#">{item.name}</a>}
          description={[<h6 key={item.email}><i className="fas fa-envelope" />
          :{item.email}</h6>, 
          <h6 key={item.phone}> <i className="fas fa-phone" />
            :{item.phone}</h6>]} 

        />
      </List.Item>
    )}
  />,
  <ToastContainer />
     </React.Fragment>
          )
          }      
           }
            </Consumer>
            </Col>
            </Row>
        )
    }
}

export default Contacts
