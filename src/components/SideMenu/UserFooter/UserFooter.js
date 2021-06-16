import React from 'react';
import './UserFooter.css';
import user from '../../../assets/hero0.jpeg';

const UserFooter = () => {
    return (
        <div className="side-menu-footer">
            <div className='avatar'>
                <img src={user} alt="user" />
            </div>
            <div className="user-info">
                <h5>Shahinur Alam Bhuiyan</h5>
                <p>shahinur.alam.bhuiyan01@gmail.com</p>
            </div>
        </div>
    );
};

export default UserFooter;