import api from './api'

export const getServices = async () => {
  const res = await api.get("/openapi/services");
  return res.data;
};