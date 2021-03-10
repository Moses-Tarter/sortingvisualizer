import React from 'react'
import ReactDOM from 'react-dom'
import Visualizer from './visualizer'


const App = () => {
    return (
        <Visualizer />
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));