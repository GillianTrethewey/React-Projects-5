import React from 'react';
import Navigation from '../navigation';
// import Outlet
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Navigation/>
            <Outlet />
            {/* Add an Outlet*/}
        </>
    );
};

export default Root;