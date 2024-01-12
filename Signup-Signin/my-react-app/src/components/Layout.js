import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
              {children}
            </header>

            <main>
            <nav>
                    <ul> 
                        
                   <Link to="/signup">Signup</Link><br></br>
                   <Link to="/signin">Signin</Link><br></br>
                   <Link to="/dashboard">Dashboard</Link><br></br>
                    
                    </ul>
                </nav>
            </main>
        </div>
    );
};

export default Layout;