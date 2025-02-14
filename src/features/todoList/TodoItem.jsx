import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from "./TodoSlice"
const TodoItem = ({ id, text, completed }) => {
    const dispatch = useDispatch();
    function handleDelete(id) {
        dispatch(deleteTodo(id))
    }
    function handleComplete(id) {
        // console.log("id is : ", id)
        dispatch(completeTodo(id));
    }
    return (
        <>
            <div>
                <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                    {text}
                </span>
                <button onClick={() => handleDelete(id)}>
                    <FaTrash />
                </button>
                <button onClick={() => handleComplete(id)}>
                    <FaCheck />
                </button>
            </div>
        </>
    )
}

export default TodoItem