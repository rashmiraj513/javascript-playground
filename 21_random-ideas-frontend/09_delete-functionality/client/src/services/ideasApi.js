import axios from 'axios';

class IdeasApi {
  constructor() {
    // For localhost only
    // this._apiUrl = 'http://localhost:8080/api/ideas';

    // For deployment
    this._apiUrl = '/api/ideas';
  }

  getIdeas() {
    return axios.get(this._apiUrl);
  }

  createIdea(data) {
    return axios.post(this._apiUrl, data);
  }

  // Not implemented in the UI
  updateIdea(id, data) {
    return axios.put(`${this._apiUrl}/${id}`, data);
  }

  deleteIdea(id) {
    const username = localStorage.getItem('username')
      ? localStorage.getItem('username')
      : '';
    return axios.delete(`${this._apiUrl}/${id}`, {
      data: {
        username,
      },
    });
  }
}

export default new IdeasApi();
