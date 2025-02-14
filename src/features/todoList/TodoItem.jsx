import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const TodoItem = ({ id, text, completed }) => {
    const dispatch = useDispatch();
    function handleEdit(id) {

    }
    function handleDelete(id) {

    }
    function handleComplete(id) {

    }
    return (
        <>
            <div>
                <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                    {text}
                </span>
                <button onClick={handleEdit}>
                    <FaEdit />
                </button>
                <button onClick={handleDelete}>
                    <FaTrash />
                </button>
                <button onClick={handleComplete}>
                    <FaCheck />
                </button>
            </div>
        </>
    )
}

export default TodoItem