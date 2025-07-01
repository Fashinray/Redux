
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { createTodo, deleteTodo, markAsRead, updateTodo } from "../../redux/todo"
import type { RootState } from "../../redux/store";


function Home() {
    const count = useSelector((state: RootState) => state.counter.value)
    const [inputText, setInputText] = useState("");
    const [editId, setEditId] = useState<number | null>(null);

    const todos = useSelector((state:RootState) => state.todo.todos)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if ( inputText.trim() ==="") {
            return
        }

        if (editId !== null) {
            dispatch(updateTodo ({
                id: editId,
                title: inputText,
                completed: false
            }));

            setEditId(null);

        } else {
            dispatch(createTodo( {
            id: Math.floor(Math.random() * 1000),
            title: inputText,
            completed: false
        }));

    }

        setInputText("")

    }

     const handleDelete = (id:number) => {
            dispatch(deleteTodo(id))
        }

     const handleEdit = (todoId: number, currentTitle: string) => {
            setInputText(currentTitle);
            setEditId(todoId);
     };

     const handleMarkAsRead = (id: number) => {
        dispatch(markAsRead(id))
     }



    return (
        <div>
            <div>
                <input 
                type="text"
                value={inputText}
                onChange={(e) => handleChange(e)}
                 />
                <button onClick={handleSubmit}>create</button>

            </div>

            <h1>{count}</h1>


            
{
    todos.map(todo => (
        <div key={todo.id}>
            <h3>{todo.title}</h3>
            <button
            onClick={() => handleMarkAsRead(todo.id)
            }>{todo.completed ? "completed" : "Not Commpleted"}</button>

            <button 
            onClick={() => handleDelete(todo.id)
            }>delete</button>

            <button 
            onClick={() => handleEdit(todo.id, todo.title)
            }>update</button>
        </div>
    ))
}



        </div>

)
}
export default Home
