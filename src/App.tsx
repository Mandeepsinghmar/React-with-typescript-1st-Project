import React, { useState } from 'react';

import './App.css';
import Lists from './components/Lists'
import AddToList from './components/AddToList'

export interface IState {
  people:{
    name: string
    age: number
    photo: string
    note?: string
  }[]
}

function App() {
const [people,setPeople] = useState<IState['people']>([
  {
    name:'mandeep',
    age:21,
    photo:'https://avatars.githubusercontent.com/u/70088342?v=4',
    note:'hello bro'
  }
])



  return (
    <div className="App">
    <h1>Hello it's my first project with typescript</h1>
    <Lists people={people} />
    <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
