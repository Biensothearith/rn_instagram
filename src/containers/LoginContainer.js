import {connect} from 'react-redux';
import ScreenLogin from '../screens/ScreenLogin';
import {colors} from '../assets/index';
const mapStateToProps = state => ({
  ...state,
//   colors: colors,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ScreenLogin);
