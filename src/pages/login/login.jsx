import React, {Component} from 'react';
import {Button, message} from 'antd';
import './login.less';
import logo from './images/logo.png';

/* 登录的路由组件 */
class Login extends Component {

  handleClick = () => { message.success('成功啦...'); }

  render() {
    return (
        <div className='login'>
          <Button type='primary' onClick={this.handleClick}>学习</Button>
          <header className='login-header'>
            <img src={logo} alt='headerImg'/>
            <h2>后台管理系统</h2>
          </header>
          <section className='login-content'>

          </section>
        </div>
    );
  }
}

export default Login;