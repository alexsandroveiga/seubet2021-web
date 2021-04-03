import axios from 'axios'

const api = axios.create({
  baseURL: 'http://149.56.177.158:8056'
})

export { api }
