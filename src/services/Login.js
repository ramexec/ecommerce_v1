import api from './api'

export const loginbackend = async (data) => {
  try {
    const res = await api.post('/auth/login', data)
    return res.data
  } catch (err) {
     throw err.response.data;
  }
}

export const signupbackend = async (data) =>{
  try {
    const res = await api.post('/auth/signup', data)
    return res.data
  } catch (err) {
    throw err.response.data;
  }
}