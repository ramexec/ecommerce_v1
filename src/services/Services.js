import api from './api'

export const getServices = async () => {
  const res = await api.get("/openapi/services");
  return res.data;
};

export const getFeaturedProducts = async () => {
  const res = await api.get("/ecommerce/openapi/products/featured")
  return res.data;
}