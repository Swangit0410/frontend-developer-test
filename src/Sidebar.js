import FElogo from './dist/img/FE-t-logo.svg';
import './sidebar.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';

import { Button } from 'react-bootstrap';

function Sidebar() {

    const [showToggled, setShowToggled] = useState(false);  
    
    const ToggleSideBar = ()=>{
        showToggled ? setShowToggled(false) : setShowToggled(true);
    }

  return (
    <div className='wrapper'>
        <div className={showToggled ? "active" : ""} id='sidebar'>
            <div>
                <Button id='sidebarCollapse' onClick={ToggleSideBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </Button>
            </div>
            
            <div className='sidebar-header'>
                <img src={FElogo} className='FElogo' alt="FE logo" />
            </div>
            <ul className='list-unstyled'>
                <li>
                    <a href='#!'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    </a>
                </li>
                <li>
                    <a href='#!'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    </a>
                </li>
                <li>
                    <a href='#!'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </a>
                </li>
            </ul>
        </div>
        <div className={showToggled ? "active2" : ""} id="overlay"></div>
    </div>
  );
}

export default Sidebar;
