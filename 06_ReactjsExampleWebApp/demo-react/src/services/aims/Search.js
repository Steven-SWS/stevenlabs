

// import request from '../request'

// const serverUrl = process.env.APP_VIMS_URL;



// *********
// Vendor
// *********
// export function getVendors() {
//     const url = serverUrl + '/api/vendors';
//     const method = 'get';
//     const data = {};


//     return request({ url, method, data });
// }


export function getFabs() {
    const result = [
        'fab1', 'fab2', 'fab3'
    ]

    return Promise.resolve({
        success: true,
        message: "",
        statusCode: "",
        data: result,
    });

}

export function getProductIds(fab) {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push(`${fab}_product${i}`)
    }

    return Promise.resolve({
        success: true,
        message: "",
        statusCode: "",
        data: result,
    });

}
export function getOperationIds(product) {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push(`${product.replace('fab', 'f').replace('product', 'p')}_op${i}`)
    }

    return Promise.resolve({
        success: true,
        message: "",
        statusCode: "",
        data: result,
    });

}
export function getMeasureRecipes(operation) {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push(`${operation}_m_recipe${i}`)
    }

    return Promise.resolve({
        success: true,
        message: "",
        statusCode: "",
        data: result,
    });

}
export function getAIMSRecipes(operation) {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push(`${operation}_a_recipe${i}`)
    }

    return Promise.resolve({
        success: true,
        message: "",
        statusCode: "",
        data: result,
    });

}


