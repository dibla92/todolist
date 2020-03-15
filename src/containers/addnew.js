import { connect } from 'react-redux';
import AddTodoComponent from '../components/addtodo'
import { addTodo } from '../actions/index';



/*
per farla semplice c'è il primo metodo, mentre in calce vediamo come farlo manualmente.
Nel primo metodo se come secondo parametro c'è un oggetto allora automaticamente react convertirà l' oggetto in una dispatch.
1* nome (chiave) la proprieta del componente avvolto, 2* nome (valore) la proprieta della dispatch in actions 
*/
const methods = {
    addnew : addTodo
}

export default connect(null, methods)(AddTodoComponent);

/* 2 METODO

// riceve in automatico lo dispatch dello store e poi ownProps sarebbero le eventuali proprietà dell' app.js
// il parametro dispatch, come sopra, deve tornare il nome del metodo
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addnew: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}


export default connect(null, mapDispatchToProps)(AddTodoComponent);


3METODO -
// const myConnect = connect(mapStateToProps)  // serve ad abbonarsi allo store che è nell' index
// const MyAddTodo = myConnect(AddTodo);

// export default MyAddTodo;
*/