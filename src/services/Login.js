import axios from 'axios'

export const loginbackend = async (username, password) => {
  const query = {
    username,
    password,
  }

  const urlFull = import.meta.env.VITE_BACKEND_URL + '/auth/login'

  try {
    const res = await axios.post(urlFull, query)
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}
