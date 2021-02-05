import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-51ef4.cloudfunctions.net/api',
});

export default instance;
//http://localhost:5001/clone-51ef4/us-central1/api