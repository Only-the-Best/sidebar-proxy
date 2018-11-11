import React from "react";
import TopBar from "./components/form.js";
import SoldHomes from './components/botForm.js';
import ReactDOM from 'react-dom';
import axios from "axios";

//Put the overall module in here
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topBar: [],
      botBar: []
    }
  }

  componentDidMount() {
    console.log('are you mounting');
    let sideId = Number(window.location.pathname.replace(/\//, ''));
    if(sideId === 1){
      axios.get(`http://sidebarservice-env.cakyvedyxp.us-east-1.elasticbeanstalk.com/api/sidebar/${sideId}`).then(posts => {
        this.setState({
          topBar: posts.data[0],
          botBar: posts.data[1]
        })
        console.log('this is the topbar', this.state.topBar);
      })
    } 
    axios.get(`http://sidebarservice-env.cakyvedyxp.us-east-1.elasticbeanstalk.com/api/sidebar/${sideId}`).then(posts => {
      this.setState({
        topBar: posts.data[0],
        botBar: posts.data[1]
      })
    })
  }



  render() {
      return ( 
        <div>
          <aside id="ASIDE_1">
            <div id="DIV_2">
              <TopBar topInfo={this.state.topBar}/>
              <SoldHomes botInfo={this.state.botBar}/>
            </div>
          </aside>
        </div>
      )
    
  }
}

