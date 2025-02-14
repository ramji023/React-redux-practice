import { useSelector, useDispatch } from "react-redux"
import AddTodo from "./AddTodo"
import TodoItem from "./TodoItem"
const Todo = () => {
    const todos = useSelector((state) => state.todos.todos)
    console.log("todos are : ", todos);
    return (
        <>
            <AddTodo />
            {todos.length !== 0 ? (<>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <TodoItem id={todo.id} text={todo.text} completed={todo.completed} />
                    </div>

                ))}
            </>) : (<p>there is no todos</p >)
            }
        </>
    )
}

export default Todo