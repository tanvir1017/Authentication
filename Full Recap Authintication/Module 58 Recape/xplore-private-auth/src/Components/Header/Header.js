import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, Logout } = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/login">Log in</Link>
            <span>{user?.displayName} </span>
            {user?.email &&
                <button className="btn btn-warning" onClick={Logout}>Logout</button>}
        </div>
    );
};

export default Header;