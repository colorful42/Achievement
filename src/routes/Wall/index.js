import { Card } from 'antd';
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import { connect } from 'dva';

class Wall extends Component {

  render() {
    return (
      <div>this is wall page.
        <Card
          title="Card title"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}

export default  Wall;
