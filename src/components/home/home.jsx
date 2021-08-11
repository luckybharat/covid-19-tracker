import React from 'react'
import './home.css'
import Overview from '../overview/overview'
import Tracker from '../tracker/tracker'
import Virus from '../../assets/icons/coronavirus.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
class Home extends React.Component {
  render () {
    return (
        <Router>
      <div className='bg-color'>
        <nav className='p-3 bg-white'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='brand-logo-and-name d-flex align-items-center'>
                    <img src={Virus} alt='brand-icon' />
                    <div className='ml-3'>Covid-19 Tracker</div>
                  </div>
                  <div>
                    <ul className='navbar-link'>
                      <li>
                        <Link to='/home/'>Overview</Link>
                      </li>
                      <li>
                        <Link to='/tracker'>Tracker</Link>
                      </li>
                      <li>
                        <Link to='#'>Contagion</Link>
                      </li>
                      <li>
                        <Link to='#'>Symptoms</Link>
                      </li>
                      <li>
                        <Link to='#'>Prevention</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
                
                    <Switch>
                        <Route path='/home/'>
                        <   Overview></Overview>
                        </Route>
                        <Route path='/tracker'>
                            <Tracker></Tracker>
                        </Route>
                    </Switch>
                
            </div>
          </div>
        </div>
      </div>
      </Router>
    )
  }
}
export default Home
