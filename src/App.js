//import logo from './logo.svg';
import React from 'react';
import SearchBar from './SearchBar.js';
import './App.css';
import List from './List.js';

// const testData = [
//   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//   {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//   {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];

class App extends React.Component {
  state={
    profiles:[],
  }
  
  addProfile = (profile) =>{
    this.setState(prevState => ({
      profiles:[...prevState.profiles,profile],
    }));
  }
  
  render()
  {
    return (
      <>
        <div className="header">The GitHub Cards App"</div>
        <SearchBar addProfile={this.addProfile}/>
        <List profiles={this.state.profiles}/>
      </>
    );
  }
}

export default App;
