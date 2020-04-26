import React, { Component } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from "../config/axios";
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import './SignUp.css'
interface ISignUpState { // 如果不声明会报Property 'account' does not exist on type 'Readonly<{}>'.的错误
  account: string,
  password: string,
  password_confirmation: string
}
class SignUp extends React.Component<any,ISignUpState>  {
    constructor(props:any){
        super(props)
        this.state={
            account: '',
            password: '',
            password_confirmation: ''
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
    onChangePassword_confirmation=(e:any)=>{
        this.setState({
            password_confirmation: e.target.value
        })
    }
    submit = async()=>{
        const { account,password,password_confirmation} = this.state;
        try{
            await axios.post('sign_up/user',{
                account,
                password,
                password_confirmation 
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
            <div className="SignUp" id='SignUp'>
                <h1>番茄毕业系统</h1>
                <Input size="large" placeholder="请输入你的用户名" prefix={<UserOutlined />} value={this.state.account} onChange={this.onChangeAccount}/>
                <Input.Password size="large" placeholder="请输入密码" value={this.state.password} onChange={this.onChangePassword}/>
                <Input.Password size="large" placeholder="请再次输入密码" value={this.state.password_confirmation} onChange={this.onChangePassword_confirmation}/>
                <Button type="primary" className='signupbtn' onClick={this.submit}>注册</Button>
                <p>如果有账号，请<Link to="/login">登录</Link></p>
            </div>
        )
    } 
}
export default withRouter(SignUp) 