import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Welcome back,<span className="text-danger"> { user.displayName }</span></h1>
        </div>
    );
};

export default Home;