import TodoFooter from '../components/todofooter';
import {connect} from 'react-redux';
import {filterTodo} from '../actions/index'

const mapStatetoProps = (state, ownProps) => {
    return {
        activeFilter: state.setFilter
    }
}

const methods = {
    filterTodo: filterTodo
}

 // serve ad abbonarsi allo store che è nell' index, se passo null vuol dire che passo l' oggetto dispatch
const myConnect = connect(mapStatetoProps, methods) 
const MyFooterContainer = myConnect(TodoFooter);



export default MyFooterContainer;