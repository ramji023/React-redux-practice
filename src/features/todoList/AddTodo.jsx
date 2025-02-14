import { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "./TodoSlice";
import { nanoid } from "@reduxjs/toolkit";
const AddTodo = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState("");
    function handleAddTodo() {
        if (text.trim()) {
            dispatch(addTodo({
                id: nanoid(),
                text: text,
                completed: false,
            }))
            setText("");
        }
    }
    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAddTodo}>add</button>
        </>
    )
}

export default AddTodo