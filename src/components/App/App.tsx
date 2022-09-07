import React from 'react'
import './App.scss'
import Card from '../Card/Card';

type AppProps = { num: number };

const App = ({num}: AppProps) => {
  return (
    <main className="page">
      <div className="content">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        <div className="cards">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </main>
  );
};

export default App;