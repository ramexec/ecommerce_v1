import api from './api'
import { decodeJwt } from './decodeJwt';

// Services 

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


// Products 

export const getPaginatedProducts = async ({ page=0, size=10, query=''}) => {
  const res = await api.get(`/ecommerce/openapi/products?page=${page}&size=${size}&query=${query}`);
  return res;
}

export const saveProduct = async ( form ) => {
  const res = await api.post('/ecommerce/product',form);
  return res
}

export const deleteProduct = async (id) => {
  const res = await api.delete(`/ecommerce/product/${id}`)
  return res ;
}

export const updateProduct = async (id, form) => {
  const res = await api.put(`/ecommerce/product/${id}`,form);
  return res;
}

// Categories 

export const getCategories = async () => {
  const res = await api.get('/ecommerce/openapi/categories');
  return res;
}

export const updateCategory = async (id, form) => {
  const res = await api.put(`/ecommerce/category/${id}`,form);
  return res;
}
export const saveCategory = async (form) => {
  const res = await api.post(`/ecommerce/category`,form);
  return res;
} 
export const deleteCategory = async(id ) => {
  const res = await api.delete(`/ecommerce/category/${id}`)
  return res;
}

// Cart 

export const addToCart = async(data) => {
  const res = await api.post('/ecommerce/cart',data)
  return res;
}

export const getAllCartItems = async() => {
  const res = await api.get('/ecommerce/cart');
  return res;
}
export const deleteCartItem = async(id) => {
  const res = await api.delete(`/ecommerce/cart/${id}`)
  return res;
}