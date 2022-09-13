import React from 'react'
import './App.scss'
import Card from '../Card/Card';

const App = () => {
  return (
    <main className="page">
      <div className="content">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        <div className="cards">
          <Card 
            taste={'c фуа-гра'}
            numOfFeeds={'10'}
            numOfMice={1}
            numOfKg={'0,5'}
            selectedCaption={'Печень утки разварная с артишоками.'}
          />
          <Card 
            taste={'c рыбой'}
            numOfFeeds={'40'}
            numOfMice={2}
            numOfKg={'2'}
            selectedCaption={'Головы щучьи с чесноком да свежайшая сёмгушка.'}
          />
          <Card 
            taste={'c курой'}
            numOfFeeds={'100'}
            numOfMice={5}
            numOfKg={'5'}
            complimentString={'заказчик доволен'}
            selectedCaption={'Филе из цыплят с трюфелями в бульоне.'}
            disabled={true}
          />
        </div>
      </div>
    </main>
  );
};

export default App;