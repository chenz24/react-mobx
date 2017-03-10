import React from 'react';
import { Link } from 'react-router';

import logo from '../assets/cnodejs_light.svg';

class Layout extends React.Component {

  render() {
    return (
      <div>
        <div className="hero bg-black">
          <div className="hero-head">
            <div className="container">
              <nav className="nav">
                <div className="nav-left">
                  <a className="nav-item is-brand logo" href="">
                    <img src={logo} />
                  </a>
                </div>
                <div className="nav-right nav-menu">
                  <Link to='/' className='nav-item' activeClassName='active'>首页</Link>
                  <Link to='/about' className='nav-item' activeClassName='active'>关于</Link>
                  <Link to='/login' className='nav-item' activeClassName='active'>登录</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <section className="section">
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Layout;
