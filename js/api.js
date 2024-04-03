async function getProducts(){
    const token = localStorage.getItem('token');
    const resp = await fetch('https://api.escuelajs.co/api/v1/products',{
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });
    return await resp.json();
}

async function getToken(email,password){
    const resp = await fetch('https://api.escuelajs.co/api/v1/auth/login',{
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            "email": email,
            "password": password
        }),
    });

    return await resp.json();

}

export {
    getProducts,
    getToken,
}