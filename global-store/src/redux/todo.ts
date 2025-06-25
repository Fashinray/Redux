import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];

}

const initialState: TodoState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state, action:PayloadAction<Todo>) => {
        const newtodos = [...state.todos, action.payload]
      state.todos = newtodos
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
        const updateTodo = state.todos.map((todo: Todo) => {
            if(todo.id === action.payload.id) {
                return{
                    ...todo,
                    title:action.payload.title

                }      
        }
        return todo
            
        })
      state.todos = updateTodo
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
        state.todos = state.todos.filter((todo:Todo) => todo.id !== action.payload)
    },

    markAsRead: (state, action: PayloadAction<number>) => {
        state.todos = state.todos.map((todo: Todo) => {
            if (todo.id === action.payload) {
                return{
                    ...todo,
                    completed: !todo.completed

                }
            }
            return todo
        })

    
    },
  },
})

// Action creators are generated for each case reducer function
export const { createTodo, updateTodo, deleteTodo, markAsRead } = todoSlice.actions

export default todoSlice.reducer