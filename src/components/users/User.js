import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({match}) => {

    const githubContext = useContext(GithubContext);
    const {user, loading} = githubContext;

    useEffect(()=> {
        githubContext.getUser(match.params.login);
        // eslint-disable-next-line
    }, []);

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;

    if(loading){
        return (
            <Spinner/>
        )
    }else{
        return (
            <Fragment>
                <Link to='/' className="btn btn-light"><i class="fas fa-arrow-left"></i> Back</Link>
                Hireable{' '}
                {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className='round-img' alt='' style={{width:'150px'}}/>
                        <h1>{name}</h1>    
                        <span><i class="fas fa-map-marker-alt"></i> {location}</span>  

                        {bio && <Fragment>
                                <p>{bio}</p>
                            </Fragment>} 
                    </div>
                    <div>
                        <a href={html_url} className="btn btn-dark btn-sm my-1 border-circle"><i class="fab fa-github-alt"></i> Github Profile</a>

                        <ul>
                            <li>
                                {login && <Fragment>
                                        <strong>Username : </strong>{login}
                                    </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                        <strong>Company : </strong>{company}
                                    </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                        <strong>Website : </strong><a href={blog} className="text-primary">{blog}</a>
                                    </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card text-center">
                    <div className="badge badge-primary">Followers : {followers}</div>
                    <div className="badge badge-success">Following : {following}</div>
                    <div className="badge badge-dark">Repositories : {public_repos}</div>
                    <div className="badge badge-danger">Gists : {public_gists}</div>
                </div>
            </Fragment>
        )
    }
}

export default User