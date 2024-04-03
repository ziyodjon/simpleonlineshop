async function getProducts(url){
    //const token = localStorage.getItem('token');
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

export {
    getProducts,
    getToken,
}