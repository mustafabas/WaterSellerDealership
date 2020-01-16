import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SideBar } from '../Components/sideBar';
import HeaderNav  from '../Components/headerNav';
import { Switch, Route,  BrowserRouter as Router, Redirect } from 'react-router-dom';
import { HomeRight } from '../Components/Home/HomeRight';
import StoreListCom  from '../Components/Store/StoreListCom';
import Login from './login';
import { Layout } from '../Components/Layout';

interface State {
    activeItem: string;
}

export class Home extends React.Component<{}, State>{

    _renderRedirectLogin(){
        var getUserId = localStorage.getItem("userId");
     
        if(getUserId==null){
                return <Redirect to="login"></Redirect>;
        }   
    }
    render() {
        return (
            <Router >
           
            <Switch>
              <Route exact  path='/' render={() =><Layout><HomeRight /></Layout>} />
               <Route  exact  path='/store' render={() =><Layout> <StoreListCom /></Layout>} />
             <Route  exact  path='/login' render={() => <Login />} />
           </Switch>

            </Router>
        );
    }

}