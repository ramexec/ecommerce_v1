import api from './api'
import { decodeJwt } from './decodeJwt';

export const getServices = async () => {
  const res = await api.get("/openapi/services");
  return res.data;
};

export const getFeaturedProducts = async () => {
  const res = await api.get("/ecommerce/openapi/products/featured")
  return res.data;
}

export const getUserDetailsDecoded = async () => {
  const res = await decodeJwt();
  return res;
}