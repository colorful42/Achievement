import { Card, Icon } from 'antd';
import React, { Component } from 'react';
import style from './MainPage.less';
//import ReactDOM from 'react-dom';
//import { connect } from 'dva';

const { Meta } = Card;

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {count: 1};
  }

  render() {
    return (
    <div>
      <Card  style={{ width: 300 }}
             actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
        <Meta
          title="学业"
          description={[<div>您已经完成了{this.state.count}</div>]}
        />
      </Card>
    </div>
    );
  }
}

export default  MainPage;
