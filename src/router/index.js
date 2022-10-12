import React from 'react';
import { BrowserRouter ,Route, Switch, Redirect} from "react-router-dom";
import Login from '@/views/login/Login';  //  导入登陆组件
import Main from '@/views/main/Main';  // 导入登陆后要显示的main组件
export default function IndexRouter() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/login'  component={Login}></Route>
            {/* <Route path='/'  component={Main}></Route> */}
            <Route path='/'  render={()=>{
                return localStorage.getItem('token')? <Main></Main> :  <Redirect to='/login'></Redirect>
            }}></Route>
        </Switch>
    </BrowserRouter>
  )
}