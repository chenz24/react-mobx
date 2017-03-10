import React from 'react';

export default class FooView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'foo' };
  }

  render() {
    return (
      <p>
        I'm {this.state.name}.
      </p>
    );
  }
}
