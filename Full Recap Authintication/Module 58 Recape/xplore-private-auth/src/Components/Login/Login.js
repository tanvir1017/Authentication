import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please login first</h2>
            <br />
            <div>________________or________________</div>
            <button onClick={signInUsingGoogle} className="mt-2 btn btn-success">Google sign in</button>
            <h5 className="mt-2">New user ?
                <Link to="/register">Register</Link>
            </h5>
        </div>
    );
};

export default Login;