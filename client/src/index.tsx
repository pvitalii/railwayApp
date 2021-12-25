import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserStore from "./store/UserStore";

interface defaultState {
    user: {
        isAuth: boolean,
        // setUser: any,
        setIsAuth: Function,
        // username: string,
        // setUsername: Function
    }
}

export const Context = createContext({} as defaultState)

ReactDOM.render(
  <Context.Provider value={{
      user: new UserStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
)

