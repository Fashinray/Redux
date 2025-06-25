
import { Provider } from 'react-redux'
import Navigation from './navigation'
import { store } from './navigation/redux/store'

function App() {

  return (
    <Provider store={store}>
   <Navigation/>

   </Provider>
  )
}

export default App
