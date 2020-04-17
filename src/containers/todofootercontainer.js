import TodoFooter from '../components/todofooter';
import {connect} from 'react-redux';
import {filterTodo} from '../actions/index';
import {withRouter} from 'react-router-dom';

const mapStatetoProps = (state, ownProps) => {
    return {
        activeFilter: state.setFilter
    }
}

const methods = {
    filterTodo: filterTodo
}

 // serve ad abbonarsi allo store che è nell' index, se passo null vuol dire che passo l' oggetto dispatch
export default withRouter(connect(mapStatetoProps, methods)(TodoFooter))
