import commonAPI from "./commonAPI";

import SERVER_BASE_URL from "./serverUrl";


// registerAPI
export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}
// LoginAPI
export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}

// add-product
export const addProductAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-product`,reqBody,reqHeader)
}

// allProducts
export const allProductsAPI = async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-product`,{})
}



// Fetch single product by ID
export const getProductByIDAPI = async (id) => {
    if (!id) {
        console.error("Invalid product ID:", id);
        return { success: false, message: "Invalid ID provided" };
    }
    return await commonAPI("GET", `${SERVER_BASE_URL}/view/${id}`);
};

 