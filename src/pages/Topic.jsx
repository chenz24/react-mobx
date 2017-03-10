import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Topic extends React.Component {

  componentWillMount() {
    const id = this.props.params.id;
    this.props.store.getTopicByID(id);
  }

  render() {
    const topic = this.props.store.topic;

    return (
      <div className="container">
        <h3 className="title">{topic.title}</h3>
        <h4 className="subtitle">123123</h4>
        <hr />
        <div className="content" dangerouslySetInnerHTML={{ __html: topic.content }} />
      </div>
    );
  }
}

export default Topic;
