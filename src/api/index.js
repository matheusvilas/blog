import axios from 'axios'

export const getPost = () => {
  return axios.get(`https://www.reddit.com/r/feet.json`).then(res => {
    return res
  })
}
