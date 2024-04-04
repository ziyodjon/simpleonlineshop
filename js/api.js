async function getProducts(url){
    const resp = await fetch(url);
    return await resp.json();
}

async function getToken(login,password){
    const resp = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: login,
          password: password,
          expiresInMins: 30, // optional, defaults to 60
        })
    });

    return await resp.json();

}

const getProductsFunc = async (page,LIMIT) => {
    const products = await getProducts(`https://dummyjson.com/products?limit=${LIMIT}&skip=${(page - 1) * LIMIT}`);

    return await products
}

async function getDetailPage(param){
    let url = new URLSearchParams(param);
    let prodId = url.get("prodId");
    const resp = await fetch('https://dummyjson.com/products/' + prodId);

    return await resp.json();
}

async function getCategories(){
    const resp = await fetch('https://dummyjson.com/products/categories');
    return await resp.json();
}

async function getProductsByCategory(catName){
    const resp = await fetch(`https://dummyjson.com/products/category/${catName}`);
    return await resp.json();
}

async function addNewProduct(title){
    const resp = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title,
        })
    });

    return await resp.json();
}

async function updateCurrentProduct(id){
    const res = fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'iPhone Galaxy +1'
        })
      });
        const data = await res.json() 
      return data ;
}



export {
    getProducts,
    getToken,
    getProductsFunc,
    getDetailPage,
    getCategories,
    getProductsByCategory,
    addNewProduct,
    updateCurrentProduct,
}