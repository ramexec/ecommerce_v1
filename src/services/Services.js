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

export const getPaginatedProducts = async ({ page=0, size=10, query=''}) => {
  const res = await api.get(`/ecommerce/openapi/products?page=${page}&size=${size}&query=${query}`);
  return res;
}

export const saveProduct = async ( form ) => {
  const res = await api.post('/ecommerce/product',form);
  return res
}

export const getCategories = async () => {
  const res = await api.get('/ecommerce/openapi/categories');
  return res;
}

export const deleteProduct = async (id) => {
  const res = await api.delete(`/ecommerce/product/${id}`)
  return res ;
}