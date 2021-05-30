import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import 'tailwindcss/tailwind.css'
import './index.css'

const render = (Component) => {
    ReactDOM.render(
        <React.StrictMode>
            <Component />
        </React.StrictMode>
    , document.getElementById('root'))
}

render(hot(App))

