import React from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';
import './MainView.css';

@inject('store')
@observer
class FooView extends React.Component {
  constructor(props) {
    super(props);

    this.store = props.store;
    console.log(this.store);
  }

  componentWillMount() {
    this.props.store.getTopics();
  }

  render() {
    return (
      <div className='main-view'>
        <div>{this.store.name}</div>
        <div className='btn-group'>
          <Link to='/foo' className='btn' activeClassName='active'>To Foo</Link>
          <Link to='/bar' className='btn' activeClassName='active'>To Bar</Link>
        </div>
        <div className='view'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default FooView;
