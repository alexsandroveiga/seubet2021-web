import axios from 'axios'

const api = axios.create({
  baseURL: 'http://135.148.2.155:8084'
})

export { api }
