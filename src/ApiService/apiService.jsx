import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

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
        return apiInstance.post("/grocery/user/login", data);
    },
    Register: (data) => {
        return apiInstance.post("/grocery/user/register", data);
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
    }
}

export default api;
