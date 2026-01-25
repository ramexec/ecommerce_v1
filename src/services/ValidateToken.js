import axios from "axios";

export const validateJwt = async (jwt) => {

  const urlFull = import.meta.env.VITE_BACKEND_URL + '/auth/check'
  const res = await axios.get(urlFull, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });

  return res.data;
};
