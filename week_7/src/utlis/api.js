import axios from 'axios';

import { token } from './global';

const { VITE_URL, VITE_PATH } = import.meta.env;

const loginUrl = `${VITE_URL}/admin/signin`;
const logoutUrl = `${VITE_URL}/logout`;
const checkLoginUrl = `${VITE_URL}/api/user/check`;
const productUrl = `${VITE_URL}/v2/api/${VITE_PATH}/product`;
const cartUrl = `${VITE_URL}/api/${VITE_PATH}/cart`;
const couponUrl = `${VITE_URL}/api/${VITE_PATH}/coupon`;
const orderUrl = `${VITE_URL}/api/${VITE_PATH}/order`;
const articleUrl = `${VITE_URL}/api/${VITE_PATH}/article`;

const adminProductUrl = `${VITE_URL}/api/${VITE_PATH}/admin/product`;
const adminOrderUrl = `${VITE_URL}/api/${VITE_PATH}/admin/order`;
const adminCouponUrl = `${VITE_URL}/api/${VITE_PATH}/admin/coupon`;
const adminArticleUrl = `${VITE_URL}/api/${VITE_PATH}/admin/article`;
const uploadFileUrl = `${VITE_URL}/api/${VITE_PATH}/admin/upload`;

export const loginApi = (data) => axios.post(loginUrl, data);
export const logoutApi = () => axios.post(logoutUrl);
export const getProductApi = (id) => axios.get(`${productUrl}/${id}`);
export const getCartApi = () => axios.get(cartUrl);
export const getArticlesApi = () => axios.get(`${articleUrl}s`);
export const getArticleApi = (id) => axios.get(`${articleUrl}/${id}`);
export const addToCartApi = (data) => axios.post(cartUrl, data);
export const useCouponApi = (data) => axios.post(couponUrl, data);
export const updateCartApi = (id, data) => axios.put(`${cartUrl}/${id}`, data);
export const removeCartApi = (id) => axios.delete(`${cartUrl}/${id}`);
export const removeAllCartApi = () => axios.delete(`${cartUrl}s`);

export const getProductsApi = (category) => {
  if (category) {
    return axios.get(`${productUrl}s?category=${category}`);
  }

  return axios.get(`${productUrl}s`);
};

export const checkLoginApi = () => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.post(checkLoginUrl);
};

export const checkoutApi = (data) => axios.post(orderUrl, data);

export const getAdminProductsApi = (page) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.get(`${adminProductUrl}s?page=${page}`);
};

export const addAdminProductApi = (data) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.post(adminProductUrl, data);
};

export const updateAdminProductApi = (id, data) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.put(`${adminProductUrl}/${id}`, data);
};

export const deleteAdminProductApi = (id) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.delete(`${adminProductUrl}/${id}`);
};

export const uploadFileApi = (formData) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.post(uploadFileUrl, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const getAdminOrdersApi = (page) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.get(`${adminOrderUrl}s?page=${page}`);
};

export const updateAdminOrderApi = (id, data) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.put(`${adminOrderUrl}/${id}`, data);
};

export const deleteAdminOrderApi = (id) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.delete(`${adminOrderUrl}/${id}`);
};

export const deleteAllAdminOrderApi = () => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.delete(`${adminOrderUrl}s/all`);
};

export const getAdminCouponsApi = (page) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.get(`${adminCouponUrl}s?page=${page}`);
};

export const addAdminCouponApi = (data) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.post(adminCouponUrl, data);
};

export const updateAdminCouponApi = (id, data) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.put(`${adminCouponUrl}/${id}`, data);
};

export const deleteAdminCouponApi = (id) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.delete(`${adminCouponUrl}/${id}`);
};

export const getAdminArticlesApi = (page) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.get(`${adminArticleUrl}s?page=${page}`);
};

export const addAdminArticleApi = (data) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.post(adminArticleUrl, data);
};

export const updateAdminArticleApi = (id, data) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.put(`${adminArticleUrl}/${id}`, data);
};

export const deleteAdminArticleApi = (id) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.delete(`${adminArticleUrl}/${id}`);
};

export const getAdminArticleApi = (id) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  return axios.get(`${adminArticleUrl}/${id}`, id);
};
