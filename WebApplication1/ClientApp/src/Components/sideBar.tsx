import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { AppState } from '../redux/store';
import { getUserInfo } from '../redux/actions/userAction';
import { IUserInformation } from '../model/userModel';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';


interface State {
    activeItem: string;
}


interface Props{
    getUserInfo: () => void;
    user: IUserInformation;
    isLoading: boolean;

}
export class SideBar extends React.Component<Props, State>{
    componentWillMount(){
        this.props.getUserInfo();
    }

    render() {
        return (
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">

                    <div className="navbar nav_title">
                        <a href="index.html" className="site_title">ABONE TAKİP</a>
                    </div>

                    <div className="profile">
                        <div className="profile_pic">
                            <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
                        </div>
                        <div className="profile_info">
                            <span>Hoşgeldin,</span>
                            <h2>
                            {this.props.isLoading && <ClipLoader

size={10}
//size={"150px"} this also works
color={"#123abc"}
loading={this.props.isLoading}
/>}
                                {this.props.user.nameSurname}
                            </h2>
                        </div>
                    </div>

                    <br />
                    <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                        <h3>Admin</h3>
                        <div className="menu_section">
                   
                            <ul className="nav side-menu">
    
                                <li><a><i className="fa fa-edit"></i> Müşteri Yönetimi <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><Link to="/customers">Müşteriler</Link></li>
                                        <li><a href="/addcustomer">Müşteri Ekle</a></li>
                                    </ul>
                                </li>
                                <li><a><i className="fa fa-desktop"></i> Sipariş Yönetimi <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                    <li><a href="media_gallery.html">Siparişler</a></li>
                                        <li><a href="general_elements.html">Sipariş Ekle</a></li>
                                    </ul>
                                </li>
                                <li><a><i className="fa fa-table"></i> Çalışan Yönetimi <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="tables.html">Çalışanlar</a></li>
                                        <li><a href="tables_dynamic.html">Çalışan Ekle</a></li>
                                    </ul>
                                </li>
                                <li><a><i className="fa fa-bar-chart-o"></i> Raporlar <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="chartjs.html">Ürün Raporu</a></li>
                                        <li><a href="chartjs2.html"></a></li>
                                        <li><a href="morisjs.html">Moris JS</a></li>
                                        <li><a href="echarts.html">ECharts </a></li>
                                        <li><a href="other_charts.html">Other Charts </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="menu_section">
                            <h3>Live On</h3>
                            <ul className="nav side-menu">
                                <li><a><i className="fa fa-bug"></i> Additional Pages <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="e_commerce.html">E-commerce</a></li>
                                        <li><a href="e_commerce_backend.html">E-commerce Backend</a></li>
                                        <li><a href="projects.html">Projects</a></li>
                                        <li><a href="project_detail.html">Project Detail</a></li>
                                        <li><a href="contacts.html">Contacts</a></li>
                                        <li><a href="profile.html">Profile</a></li>
                                        <li><a href="real_estate.html">Real Estate</a></li>

                                    </ul>
                                </li>
                                <li><a><i className="fa fa-windows"></i> Extras <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="page_404.html">404 Error</a></li>
                                        <li><a href="page_500.html">500 Error</a></li>
                                        <li><a href="coming_soon.html">Coming Soon</a></li>
                                        <li><a href="plain_page.html">Plain Page</a></li>
                                        <li><a href="login.html">Login Page</a></li>
                                        <li><a href="sign_up.html">SignUp Page</a></li>
                                        <li><a href="pricing_tables.html">Pricing Tables</a></li>

                                    </ul>
                                </li>
                                <li><a><i className="fa fa-laptop"></i> Landing Page <span className="label label-success pull-right">Coming Soon</span></a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="sidebar-footer hidden-small">
                        <a data-toggle="tooltip" data-placement="top" title="Settings">
                            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                            <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Lock">
                            <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Logout">
                            <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                        </a>
                    </div>
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
)(SideBar)

