import { connect } from 'react-redux';
import CountGroup from '../component/CountGroup'
import updateTotalAction from '../actions'

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTotal: (number) => { dispatch(updateTotalAction(number)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountGroup);