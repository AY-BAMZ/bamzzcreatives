import React, { useState } from 'react'
import Logo from '../logo.svg'
import Home from './home/Home';

function Navbar() {
    const [count, setCount] = useState(1);
    return (
        <div>
            <div className='navbar'>
                <img className="navLogo" src={Logo} alt="" />
                <div className="navLinks">
                    <ul style={{ listStyle: 'none' }}>
                        <li className='active'>HOME</li>
                        <li onClick={() => setCount(1)}>SERVICES</li>
                        <li onClick={() => setCount(2)}>ORDERS</li>
                        <li onClick={() => setCount(3)}>PORTFOLIO</li>
                        <li onClick={() => setCount(4)}>FAQ</li>
                        <li onClick={() => setCount(5)}>ABOUT</li>
                        <li onClick={() => setCount(6)}>CONTACT</li>
                    </ul>
                </div>
                <div className="hire">
                    <button>HIRE ME</button>
                </div>
            </div>
            <div className="render">
                <div>
                    {count === 1 && <Home />}
                </div>
                <div>
                    {count === 2 && <Home />}
                </div>
                <div>
                    {count === 3 && <Home />}
                </div>
                <div>
                    {count === 4 && <Home />}
                </div>
                <div>
                    {count === 5 && <Home />}
                </div>
                <div>
                    {count === 6 && <Home />}
                </div>
                <div>
                    {count === 7 && <Home />}
                </div>
            </div>
        </div>
    )
}

export default Navbar
