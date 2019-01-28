import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 import PriceList from './components/PriceList.js';
 import ViewTab from './components/ViewTab';
import {LIST_VIEW,CHART_VIEW} from './utility';
import MonthPicker from './components/PriceList';

const items=[{
  "id":1,
  "title":'去云南旅游',
  "price":200,
  "date":'2018-09-10',
  "category":{
    "id":1,
    "name":'旅行',
    "type":'outcome',
    "iconName":'ios-plane'
  }
},
{
  "id":2,
  "title":'去云南旅游',
  "price":200,
  "date":'2018-09-10',
  "category":{
    "id":1,
    "name":'旅行',
    "type":'outcome',
    "iconName":'ios-plane'
  }
},
{
  "id":3,
  "title":'去云南旅游',
  "price":200,
  "date":'2018-09-10',
  "category":{
    "id":1,
    "name":'旅行',
    "type":'outcome'
  }
}
]
class App extends Component {
  render() {
    console.log(items);

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React1
          </a>
        </header> */}

         <PriceList items={items}
         onModifyItem={(item)=>{alert(item.id)}}
         onDeleteItem={(item)=>{alert(item)}}
           /> 
           {/* <ViewTab
           activeTab={LIST_VIEW}
           onTabChange={(view)=>{
            console.log(view)
           }}
           /> */}
      <MonthPicker
      year={2018}
      month={11}
      />
      </div>
    );
  }
}

export default App;
