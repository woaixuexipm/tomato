import React, { Component } from 'react';
import axios from "../config/axios";
import {withRouter} from "react-router-dom";
import { Button } from 'antd';
interface IRouter{
  history?:any
}
interface IIndexState{
  user: any
}
class Index extends React.Component<IRouter,IIndexState> {
  constructor(props:any){
    super(props)
    this.state={
      user:{

      }
    }
  }
  async componentWillMount(){
    await this.getMe()
  }
  getMe=async()=>{
    try{
      const response = await axios.get('me')
      this.setState({user: response.data})
    }catch(e){
      console.error('获取用户失败')
      if(e.response.status === 401){
        window.location.href='/login'
      }
    }
  }
  logout=()=>{
    localStorage.setItem('x-token','')
    window.location.href='/login'
  }
    render(){
      return(
        <div className="Component">
          <p>欢迎，用户{this.state.user.account}</p>
          <Button type="link" onClick={this.logout}>注销</Button>
        </div>
      )
    }
  }
export default Index