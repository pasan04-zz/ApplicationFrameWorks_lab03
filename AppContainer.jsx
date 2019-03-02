'use strict';

import Adduser from './Adduser';
import React,{component} from 'react';
import Users from './Users';


export default class AppContainer extends Component{

    constructor(props){

        super(props);

        this.state = {
            users:[{
                id:Date.now(),
                name:'Pasan'
            }]
        }
    }

    addUser(user){

        this.setState(state =>({
            users:state.users.concat({id : Date.now(),name:user.name})

        }))

    }

    render() {

        return <div>

            <h2>Users App</h2>

            <Adduser adduser={user => this.adduser(user)}/>
            <Users users={this.state.users}/>
        </div>;

    }

}