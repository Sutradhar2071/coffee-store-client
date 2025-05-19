import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeesDetails = () => {
    const {photo, quantity} = useLoaderData()
    return (
        <div>
            <img src={photo} alt="" />
            <h2>{quantity}</h2>
        </div>
    );
};

export default CoffeesDetails;