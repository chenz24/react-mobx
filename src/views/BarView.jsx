import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class BarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'bar' };
  }

  render() {
    return (
      <div>
        <p>
          I'm {this.state.name}.{this.props.store.decorated}
          <span>{this.props.store.name}</span>
        </p>
        <ul>
          {this.props.store.topics.map((topic, key) => <li key={key}>{topic.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default BarView;
