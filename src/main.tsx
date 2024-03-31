import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* RTK query only (without the store) */}
    {/*<ApiProvider api={api}>*/}
    {/*  <App />*/}
    {/*</ApiProvider>*/}
    {/* RTK query included in the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
