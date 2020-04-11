import { connect } from 'react-redux';
import AddTodoComponent from '../components/addtodo'
import { addList } from '../actions/lists';



/*
per farla semplice c'è il primo metodo, mentre in calce vediamo come farlo manualmente.
Nel primo metodo se come secondo parametro c'è un oggetto allora automaticamente react convertirà l' oggetto in una dispatch.
1* nome (chiave) la proprieta del componente avvolto, 2* nome (valore) la proprieta della dispatch in actions 
*/
const methods = {
    addnew : addList
}

export default connect(null, methods)(AddTodoComponent);

