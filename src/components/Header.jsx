import React from 'react';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import './commonCssFile/commonfile.css';
import HeaderModal from './HeaderModal';
import Divider from '@mui/material/Divider';
const Header = (props) => {
    const location = useLocation();
    const title = location.pathname.slice(1);
    return (
        <>
            <div className='box'>
                <div className='left'>
                    <h4 className='title'>{title ? title.replace("-", " ") : "Dashboard"}</h4>
                    <Divider orientation="vertical" flexItem />
                </div>
                <div className='right'>
                    <div className='small_left'>
                        <p>12:49 PM</p>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <p>Sep 18, 2022</p>
                        <div className='btn_1'>
                            <Button variant="contained" size="small">Punch In</Button>
                        </div>
                    </div>
                    <div className='small_right'>
                        <p className='UserName'>Shivlal Gupta</p>
                        <div>
                            <HeaderModal />
                        </div>

                    </div>
                </div>
            </div><hr />
        </>
    )
}

export default Header