import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  SideBar  from './sideBar';
import HeaderNav  from './headerNav';


interface State {
    activeItem: string;
}
export class Layout extends React.Component<{}, State>{


    render() {
        return (


                   <div className="container body">
                <div className="main_container">
                    <SideBar></SideBar>
                    <HeaderNav></HeaderNav>

                    <div className="right_col" role="main">
                    
                        {this.props.children}

                    </div>
                </div>
            </div>
                );
                }
                
}