import {connect} from 'react-redux'
import ScreenStartUp from '../screens/ScreenStartUp'
import {startupWorker} from '../Modules/app/reducer'
const mapStateToProps = state =>({
    ...state
})
const mapDispatchToProps ={
    startupWorker
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScreenStartUp)