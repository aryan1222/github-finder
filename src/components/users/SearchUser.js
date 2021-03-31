import React , {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext';

const SearchUser = ({setAlert}) => {
    const [text, setText] = useState('');
    const githubContext = useContext(GithubContext);

    const onChange = (e) =>{
        setText(e.target.value)
    }       

    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === ''){
            setAlert('Please enter a username', 'light');
        }else{
            githubContext.searchUser(text);
            setText('');
        }
        
    }

    return (
        <div>
            <form onSubmit={onSubmit.bind(this)} className="form">
                <input type="text" name="text" placeholder="Search user" value={text} onChange={onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block mt-3 border-circle" />
            </form>

            {githubContext.users.length > 0 && <button onClick={githubContext.clearUsers} className="btn btn-light btn-block border-circle">Clear</button>}
            
        </div>
    )
}

SearchUser.propTypes = {
    setAlert : PropTypes.func.isRequired
}

export default SearchUser