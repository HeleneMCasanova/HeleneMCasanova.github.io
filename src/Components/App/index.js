import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './app.css';
import Home from '../Home';
import Results from '../Results';
import logo from '../images/logo_no_background.png';

function App() {
  return (
    
    <div>
      <nav className='navigationContainer'>
        <a href="https://salemk12.org/" target='_blank' rel="noreferrer" className='navigationLinkStyles'>SPS Main Website</a>

        <a href="https://salem.tedk12.com/hire/index.aspx" target='_blank' rel="noreferrer" className='navigationLinkStyles'>Talent Ed</a>
      </nav>

      <div className='mainContainer'>

        <div className='mainTitleTextContainer'>

            <div className='logoContainer'>
              <img src={logo} alt='logo' className='logoStyles'/>
            </div>

            <h2 className='mainTitleText'>Teacher Salary Estimator</h2>
            <h3 className='mainTitleSubText'>Salem Public Schools</h3>
            <h4 className='mainTitleSubText'>Salem, Massachusetts</h4>
        </div>

      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path="Results/:id" element={<Results/>} />
        </Routes>
      </BrowserRouter>

      <footer className='footerContainer'>
        <p>&#169; Copyright Salem Public School District</p>
      </footer>
    </div>
  );
}

export default App;
