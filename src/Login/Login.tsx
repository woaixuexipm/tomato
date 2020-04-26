import React, { Component } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from "../config/axios";
import {Link}from 'react-router-dom';
import {withRouter} from "react-router-dom";
import './Login.css'
interface ILoginState { // 如果不声明会报Property 'account' does not exist on type 'Readonly<{}>'.的错误
  account: string,
  password: string
}
class Login extends React.Component<any,ILoginState>  {
    constructor(props:any){
        super(props)
        this.state={
            account: '',
            password: ''
        }
    }
    onChangeAccount=(e:any)=>{
        this.setState({
            account: e.target.value
        })
    }
    onChangePassword=(e:any)=>{
        this.setState({
            password: e.target.value
        })
    }
    submit = async()=>{
        const { account,password} = this.state;
        try{
            await axios.post('sign_in/user',{
                account,
                password
            })
            console.log('成功')
            this.props.history.push('/')
        }
        catch(e){
            throw new Error(e)
        }
    }
    public render(){
        return (
            <div className="Login" id='Login'>
                <h1>番茄毕业系统</h1>
                <Input size="large" placeholder="请输入你的用户名" prefix={<UserOutlined />} value={this.state.account} onChange={this.onChangeAccount}/>
                <Input.Password size="large" placeholder="请输入密码" value={this.state.password} onChange={this.onChangePassword}/>
                <Button type="primary" className='loginbtn' onClick={this.submit}>登录</Button>
                <p>如果没有账号，请<Link to="/signup">注册</Link></p>
            </div>
        )
    } 
}
export default  withRouter(Login)