import React from 'react';
import '../css/header.css';
// import { AppleFilled } from '@ant-design/icons';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

export default function Header({ handleOpen }) {
    return (
        <div className='btn-shopping-cart'>
            <button onClick={handleOpen}><LocalMallOutlinedIcon /></button>
        </div>
    );
}
