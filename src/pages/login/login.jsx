import React, {Component} from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less';
import logo from './images/logo.png';
import {reqLogin} from '../../api';

/* 登录的路由组件 */
class Login extends Component {

  onFinish = (values) => {
    reqLogin(values).then(res => {
      const {status, msg} = res;
      if (status === 0){
        message.success('登录成功');
        // 跳转到管理页面
        this.props.history.replace('/');
      }else if (status === 1) {
        message.error(msg);
      }else {
        message.error('未知错误，请联系管理员');
      }
    }).catch(err => {
      message.error(err.message);
    });
  };

  render() {
    return (
        <div className='login'>
          <header className='login-header'>
            <img src={logo} alt='headerImg'/>
            <h1>后台管理系统</h1>
          </header>
          <section className='login-content'>
            <h2>用户登录</h2>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
            >
              {/* 声明式验证：直接使用别人定义好的验证规则进行验证 */}
              <Form.Item
                  name="username"
                  rules={[
                    { required: true, whitespace:true, message: '请输入用户名!' },
                    { min: 4, message: '用户名长度至少4位!' },
                    { max: 12, message: '用户名长度至多12位!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
              </Form.Item>
              {/* 密码要求:
               1.至少4位
               2.至多12位
               3.必须是英文、数字或下划线组成*/}
              <Form.Item
                  name="password"
                  rules={[
                    { required: true, whitespace:true, message: '请输入密码!' },
                    { min: 4, message: '密码长度至少4位!' },
                    { max: 12, message: '密码长度至多12位!' },
                    { pattern: 12, message: '密码必须是英文、数字或下划线组成!' }
                  ]}
              >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </section>
        </div>
    );
  }
}

export default Login;