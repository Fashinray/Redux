# Redux

 // Also for "create, delete, update and markAsRead

# ⚛️ React Redux Starter App

A simple React + Redux application demonstrating state management using Redux Toolkit and `react-redux`. This project is structured for beginners to learn Redux concepts including slices, actions, reducers, and store configuration.

---

## 📦 Tech Stack

- **React**
- **Redux Toolkit** (`@reduxjs/toolkit`)
- **React-Redux**
- TypeScript (if applicable)
- (Optional) Vite or CRA

---

## 🚀 Features

- Global state management with Redux Toolkit
- Action dispatching (increment, decrement, by amount)
- Use of `useSelector` and `useDispatch`
- Type-safe store setup (if using TypeScript)
- Organized folder structure

---

## 🧠 Redux Concepts Used

| Concept        | Description                                          |
|----------------|------------------------------------------------------|
| Slice          | Defines state + reducers (`createSlice`)             |
| Store          | Central place to hold app state (`configureStore`)   |
| Dispatch       | Used to send actions (`useDispatch`)                 |
| Selector       | Read values from the store (`useSelector`)           |
| Reducer        | Handles how state changes in response to actions     |

---

## 📁 Folder Structure


---

## 🛠 Setup & Installation

```bash
# Clone the repo
git clone https://github.com/your-username/redux-app.git
cd redux-app

# Install dependencies
npm install

# Start the development server
npm run dev

    import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;


        import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

        import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


        import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}





