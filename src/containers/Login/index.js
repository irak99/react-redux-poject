import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { setLogin } from "../../redux/actions/loginActions";
import LoginComponent from './Login'

const mapDispatchToProps = dispatch => bindActionCreators({
  setLogin,
}, dispatch);

export const Login = connect(null, mapDispatchToProps)(LoginComponent)