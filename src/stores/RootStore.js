import { observable, computed, action } from 'mobx';
import request from '../utils/request';

class RootStore {
  @observable name = 'hahassss';
  @observable topics = [];
  @observable topic = {};

  @action
  getTopics() {
    request.get('/topics').then(response => {
      console.log(response);
      this.topics = response.data.data;
    }).catch(error => {
      console.log(error);
    });
  }

  @action
  getTopicByID(id) {
    request.get(`/topic/${id}`).then(response => {
      this.topic = response.data.data;
    }).catch(error => {
      console.log(error);
    });
  }

  @computed
  get decorated() {
    return `${this.name}  is awesome!`;
  }
}

export default RootStore;
