async function getProducts(){
    const resp = await fetch('https://dummyjson.com/products');
    return await resp.json();
}




const productsRow = document.querySelector('.main-good-list');

const products = await getProducts();

products['products'].forEach((el,indx) => {
    const oneProduct = `
    <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
        <img class="resp" src="${el.images[0]}" alt="${el.title}">
        <div class="caption">
            <h3 class="line-clamp">${el.title}</h3>
            <p class="line-clamp">${el.description}</p>
            <p>
                <a href="#" class="btn btn-primary" role="button">Button</a> 
                <a href="#" class="btn btn-default" role="button">Button</a>
            </p>
        </div>
        </div>
    </div>`;

    productsRow.innerHTML += oneProduct;
});