import React , {useState} from 'react'
import PropTypes from 'prop-types'

const SearchUser = ({searchUser, setAlert, clearUsers, showClear}) => {
    const [text, setText] = useState('');

    const onChange = (e) =>{
        setText(e.target.value)
    }       

    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === ''){
            setAlert('Please enter a username', 'light');
        }else{
            searchUser(text);
            setText('');
        }
        
    }

    return (
        <div>
            <form onSubmit={onSubmit.bind(this)} className="form">
                <input type="text" name="text" placeholder="Search user" value={text} onChange={onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block mt-3 border-circle" />
            </form>

            {showClear && <button onClick={clearUsers} className="btn btn-light btn-block border-circle">Clear</button>}
            
        </div>
    )
}

SearchUser.propTypes = {
    searchUser : PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    showClear : PropTypes.bool.isRequired,
    setAlert : PropTypes.func.isRequired
}

export default SearchUser