import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik } from 'formik';
import * as Yup from "yup";
import { AppState } from '../redux/store';
import { LoginAction } from '../redux/actions/SignAction';
import { connect } from 'react-redux';
import { ClipLoader } from "react-spinners";
import { Redirect } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('email zorunludur').email('Email adresi geçerli değil'),
    password: Yup.string()
        .required('Şifre alanı zorunludur'),
});
const initialValues = {
    email: '',
    password: ''
}


type Props = {
    LoginAction: (username: string, password: string) => void;
    loginLoading: boolean;
    isSucces?: boolean;
}

 interface State {
    isSuccess ?:boolean;
}
class Login extends React.Component<Props, State>{
    
    state:any ={
        isSucces:null
    }

    _Login(values: any) {
        this.props.LoginAction(values.email, values.password);
        this.setState({isSuccess:this.props.isSucces});

    }
    _renderRedirect(){
    if(this.props.isSucces==true){
        return (<Redirect to="/"></Redirect>);
    }
    }
    render() {
        return (
        <div className="login">
            {this._renderRedirect()}
                <a className="hiddenanchor" id="signup"></a>
                <a className="hiddenanchor" id="signin"></a>

                <div className="login_wrapper">
                    <div className="animate form login_form">
                        <section className="login_content">

                            <Formik
                                initialValues={initialValues}
                                validationSchema={SignupSchema}
                                onSubmit={(values) => {
                                    this._Login(values);
                                }
                                }
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* and other goodies */
                                }) => (
                                        <form >
                                            <h1>Giriş Yap</h1>
                                            <div>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                />

                                                <div style={{ color: 'red' }}>
                                                    {errors.email}
                                                </div>

                                            </div>
                                            <div>

                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                                
                                                <div style={{ color: 'red' }}>
                                                    {errors.password}
                                                </div>
                                            </div>
                                            {this.state.isSucces == false && <div>Email adresi veya şifreniz yanlış</div>}
                                            <div>
                                                <button onClick={handleSubmit} type="button" className="btn btn-primary">
                                                    {this.props.loginLoading && <ClipLoader

                                                        size={20}
                                                        //size={"150px"} this also works
                                                        color={"#123abc"}
                                                        loading={this.props.loginLoading}
                                                    />}

                                                    {this.props.loginLoading == false && <span>Giriş</span>}
                                                </button>


                                                <a className="reset_pass" href="#">Lost your password?</a>
                                            </div>

                                            <div className="clearfix"></div>

                                            <div className="separator">
                                                <p className="change_link">New to site?
                            <a href="#signup" className="to_register"> Create Account </a>
                                                </p>

                                                <div className="clearfix"></div>
                                                <br />

                                                <div>
                                                    <h1><i className="fa fa-paw"></i> Gentelella Alela!</h1>
                                                    <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                                                </div>
                                            </div>
                                        </form>


                                    )}
                            </Formik>

                        </section>
                    </div>

                    <div id="register" className="animate form registration_form">
                        <section className="login_content">
                            <form>
                                <h1>Create Account</h1>
                                <div>
                                    <input type="text" className="form-control" placeholder="Username" />
                                </div>
                                <div>
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div>
                                    <a className="btn btn-default submit" href="index.html">Submit</a>
                                </div>

                                <div className="clearfix"></div>

                                <div className="separator">
                                    <p className="change_link">Already a member ?
                        <a href="#signin" className="to_register"> Log in </a>
                                    </p>

                                    <div className="clearfix"></div>
                                    <br />

                                    <div>
                                        <h1><i className="fa fa-paw"></i> Abone Takip Web Paneli!</h1>
                                        <p>©2019 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>


        );
    }


}




const mapStateToProps = (state: AppState) => ({
    loginLoading: state.signReducer.loginLoading,
    isSucces: state.signReducer.isSucces

})
function bindToAction(dispatch: any) {
    return {
        LoginAction: (username: string, password: string) =>
            dispatch(LoginAction(username, password)),
    };

}

export default connect(
    mapStateToProps,
    bindToAction
)(Login)

