import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row ms-auto">
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle text-white" 
                                href="#" 
                                id="navbarDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                                style={{ fontSize: '30px' }} // Inline style to increase font size
                            >
                                <img 
                                    src={'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png'} 
                                    alt="Profile Icon" 
                                    style={{ width: '30px', height: '30px', marginRight: '8px' }} // Adjust size and spacing as needed
                                />
                                Profile
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"  style={{ fontSize: '10px' }}>My account</a></li>
                                <li><a className="dropdown-item" href="#"  style={{ fontSize: '10px' }}>Log out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
