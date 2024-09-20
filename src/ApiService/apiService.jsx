import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/grocery";

const apiInstance = axios.create({
    baseURL: API_BASE_URL,
});

const api = {
    getAllCategory: () => {
        return apiInstance.get("/category/getAllCategories");
    },
    getProductbyCategory: (category) => {
        return apiInstance.get("/product/getProductsByCategory/" + category);
    },
    Login: (data) => {
        return apiInstance.post("/user/login", data);
    },
    Register: (data) => {
        return apiInstance.post("/user/register", data);
    },
    createProducts: (data) => {
        return apiInstance.post("/product/CreateProducts", data);
    },
    createCategory: (data) => {
        return apiInstance.post("/category/createCategory", data);
    },
    getAllProducts: () => {
        return apiInstance.get("/product/getAllProducts");
    },
    AddToCart: (data) => {
        return apiInstance.post("/cart/addtoCart", data);
    },
    getcart: (data) => {
        return apiInstance.post("/cart/getmyCart", data);
    },
    removecart: (data) => {
        return apiInstance.delete("/cart/removeCart/" + data.productId + "?userId=" + data.userId);
    },
    clearallcart: (data) => {
        return apiInstance.delete("/cart/clearMyCart?userId=" + data.userId);
    },
    contactUs: (data) => {
        return apiInstance.post("/contact/send", data);
    },
    highOfferProducts: () => {
        return apiInstance.get("/product/getHighOfferProducts");
    },
    trendingProducts: () => {
        return apiInstance.get("/product/trendingProducts");
    },
    createOrder: (data) => {
        return apiInstance.post("/payment/create-order", data);
    },
    verifyPayment: (data) => {
        return apiInstance.post("/payment/verify-payment", data);
    },
    checkoutProducts: (data) => {
        return apiInstance.post("/checkout/checkoutProducts", data);
    },
    myOrdersByUserId: (userId) => {
        return apiInstance.get("/checkout/getMyOrdersByuserId/" + userId);
    },
    getProductsById: (productId) => {
        return apiInstance.get("/product/getProductsById/" + productId);
    }

}

export default api;
