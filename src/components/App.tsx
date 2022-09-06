import React from 'react'
import './App.scss'

type AppProps = { num: number };

const App = ({num}: AppProps) => {
  return (
    <div>
      <h1 className="app">
        React is working haha
      </h1>
      <h1>
        Total Number: {num}
      </h1>
    </div>
  );
};

export default App;