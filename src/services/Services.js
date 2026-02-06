import api from './api'
import { decodeJwt } from './decodeJwt';

// Services 

export const getServices = async () => {
  const res = await api.get("/openapi/services");
  return res.data;
};


export const getUserDetailsDecoded = async () => {
  const res = await decodeJwt();
  return res;
}

// Products 

export const getFeaturedProducts = async () => {
   return (await handleTry(() =>api.get("/ecommerce/openapi/products/featured"))).data;
}

export const getPaginatedProducts = async ({ page=0, size=10, query=''}) => {
   return handleTry(() =>api.get(`/ecommerce/openapi/products?page=${page}&size=${size}&query=${query}`))
}

export const saveProduct = async ( form ) => {
   return handleTry(() =>api.post('/ecommerce/product',form))
}

export const deleteProduct = async (id) => {
   return handleTry(() =>api.delete(`/ecommerce/product/${id}`))
}

export const updateProduct = async (id, form) => {
   return handleTry(() =>api.put(`/ecommerce/product/${id}`,form))
}

// Categories 

export const getCategories = async () => {
   return handleTry(() =>api.get('/ecommerce/openapi/categories'))
}

export const updateCategory = async (id, form) => {
   return handleTry(() =>api.put(`/ecommerce/category/${id}`,form))
}
export const saveCategory = async (form) => {
   return handleTry(() =>api.post(`/ecommerce/category`,form))
} 
export const deleteCategory = async(id ) => {
  return handleTry(() => api.delete(`/ecommerce/category/${id}`)) 
}

// Cart 

export const addToCart = async(data) => {
  return handleTry(()=>api.post('/ecommerce/cart',data))
}

export const getAllCartItems = async() => {
  return handleTry(() => api.get('/ecommerce/cart'))
}
export const deleteCartItem = async(id) => {
  return handleTry(() => api.delete(`/ecommerce/cart/${id}`))
}

export const checkOutCurrentCart = async () => {
  return handleTry(() => api.post('/ecommerce/cart/checkout'));
}

//Orders

export const getAllOrders = async (page,size) => {
  return handleTry(() => api.get(`/ecommerce/orders?page=${page}&size=${size}`));
}

export const getAllOrdersAdmin = async (page,size) => {
  return handleTry(() => api.get(`/ecommerce/admin/orders?page=${page}&size=${size}`));
}

export const updateOrder = async (id,data) => {
  return handleTry(() => api.post(`/ecommerce/admin/order/${id}`,data));
}

//Utility function 

const handleTry = async (callback) =>{
  try {
    const res = await callback()
    return res;
  } catch (err) {
    throw err?.response?.data;
  }
}