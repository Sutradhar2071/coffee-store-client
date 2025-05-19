import React from 'react';
import { useLoaderData } from 'react-router';

const Profile = () => {
    const initialUser = useLoaderData();
    console.log(initialUser)
    return (
        <div>
            
        </div>
    );
};

export default Profile;