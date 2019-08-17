import axios from 'axios'

export const getPost = url => {
  return axios.get(`http://reddit.com/r/manga.json`).then(respose => {
    return respose
  })
}
