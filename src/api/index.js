import axios from 'axios'

const url = `http://localhost/wp-json/wp/v2`
export const getPost = id => {
  return axios.get(`${url}/posts/?include[]=${id}`).then(respose => {
    return respose
  })
}

export const getPosts = () => {
  return axios.get(`${url}/posts`).then(respose => {
    return respose
  })
}
