import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

const Users = ({loading, users}) => {   
    const list = users.map((user)=>{
        return(
            <UserItem key={user.id} user={user}/>
        );
    });

    if(loading){
        return <Spinner/>;
    } else{
        return (
            <div style={userStyle}>
                {list}        
            </div>
        );    
    }

}

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '1rem'       
}

Users.propTypes = {
    users : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
}

export default Users;
