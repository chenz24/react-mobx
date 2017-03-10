import React from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Index extends React.Component {

  componentWillMount() {
    this.props.store.getTopics();
  }

  render() {
    const topics = this.props.store.topics;

    return (
      <div className="container">
        <div className="topics">
          {topics.map((topic, index) => (
            <article className="media" key={`topics-${index}`}>
              <figure className="media-left">
                <p className="image is-32x32"><img src={topic.author.avatar_url} /></p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
                </div>
                <nav className="level">
                  <div className="level-left">
                    <span>{topic.reply_count}</span> / <span>{topic.visit_count}</span>
                  </div>
                </nav>
              </div>
              <div className="media-right">
                <span>21 分钟前</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default Index;
