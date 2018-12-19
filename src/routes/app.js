
//import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import TopMenu from "../components/TopMenu";
//import ReactDOM from 'react-dom';
//import { connect } from 'dva';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {count: 1};
  }
  render() {
    return (
      <div>
      <TopMenu/>
        {this.props.children}
      </div>
    );
  }
}

export default  App;
