import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GetData } from '../../redux/actions/storeAction';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../redux/store';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

interface State {
    activeItem: string;
}

type Props = {
    GetData: () => void;
    stores: IStoreItemResponseModel[];
    isStoreLoading: boolean;
}


class StoreListCom extends React.Component<Props, State>{
    componentWillMount() {
        this.props.GetData();
     
    }
    _renderItems() {

    }
    render() {

        return (
            
            <div className="row">
     
                <div className="page-title">
                    <div className="title_left">
                        <h3><small>Kayıtlı Firmalar</small></h3>
                    </div>

                    <div className="title_right">
                        <div className="col-md-5 col-sm-5   form-group pull-right top_search">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">Go!</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="row" >
                    <div className="col-md-12 col-sm-12">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Basic Tables <small>basic table subtitle</small></h2>
                                <ul className="nav navbar-right panel_toolbox">
                                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Settings 1</a>
                                            <a className="dropdown-item" href="#">Settings 2</a>
                                        </div>
                                    </li>
                                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                                    </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.props.isStoreLoading==false && this.props.stores.length>0 &&  this.props.stores.map(item => (

                                        <tr>
                                            <th scope="row">{item.storeName}</th>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.status}</td>
                                            <td>{item.createdDate}</td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


const mapStateToProps = (state: AppState) => ({
    isStoreLoading: state.getStoreList.isStoreLoading,
    stores: state.getStoreList.stores

})
function bindToAction(dispatch: any) {
    return {
        GetData: () =>
            dispatch(GetData()),
    };

}

export default connect(
    mapStateToProps,
    bindToAction
)(StoreListCom)

