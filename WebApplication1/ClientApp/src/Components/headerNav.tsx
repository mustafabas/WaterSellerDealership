import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IUserInformation } from '../model/userModel';
import { AppState } from '../redux/store';
import { connect } from 'react-redux';
import { getUserInfo } from '../redux/actions/userAction';
import { ClipLoader } from 'react-spinners';

interface State {
    activeItem: string;
}
interface Props{
    getUserInfo: () => void;
    user: IUserInformation;
    isLoading: boolean;

}
class HeaderNav extends React.Component<Props, State>{

    componentWillMount(){
        this.props.getUserInfo();
    }
    render() {
        return (
            <div className="top_nav">
                <div className="nav_menu">
                    <div className="nav toggle">
                        <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                    </div>
                    <nav className="nav navbar-nav">
                        <ul className=" navbar-right">
                            <li className="nav-item dropdown open" style={{ paddingLeft: '15px' }}>
                                <a href="javascript:;" className="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                                    <img src="images/img.jpg" alt="" />
                                    {this.props.isLoading && <ClipLoader

size={10}
//size={"150px"} this also works
color={"#123abc"}
loading={this.props.isLoading}
/>}
                                    { this.props.user.nameSurname}
                    </a>
                                <div className="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="javascript:;"> Profile</a>
                                    <a className="dropdown-item" href="javascript:;">
                                        <span className="badge bg-red pull-right">50%</span>
                                        <span>Settings</span>
                                    </a>
                                    <a className="dropdown-item" href="javascript:;">Help</a>
                                    <a className="dropdown-item" href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a>
                                </div>
                            </li>

                            <li role="presentation" className="nav-item dropdown open">
                                <a href="javascript:;" className="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="badge bg-green">6</span>
                                </a>
                                <ul className="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                                    <li className="nav-item">
                                        <a className="dropdown-item">
                                            <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                            <span>
                                                <span>John Smith</span>
                                                <span className="time">3 mins ago</span>
                                            </span>
                                            <span className="message">
                                                Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dropdown-item">
                                            <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                            <span>
                                                <span>John Smith</span>
                                                <span className="time">3 mins ago</span>
                                            </span>
                                            <span className="message">
                                                Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dropdown-item">
                                            <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                            <span>
                                                <span>John Smith</span>
                                                <span className="time">3 mins ago</span>
                                            </span>
                                            <span className="message">
                                                Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dropdown-item">
                                            <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                            <span>
                                                <span>John Smith</span>
                                                <span className="time">3 mins ago</span>
                                            </span>
                                            <span className="message">
                                                Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="text-center">
                                            <a className="dropdown-item">
                                                <strong>See All Alerts</strong>
                                                <i className="fa fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }

}


const mapStateToProps = (state: AppState) => ({
    isLoading: state.userReducer.userLoading,
    user: state.userReducer.user

})
function bindToAction(dispatch: any) {
    return {
        getUserInfo: () =>
            dispatch(getUserInfo()),
    };

}

export default connect(
    mapStateToProps,
    bindToAction
)(HeaderNav)

