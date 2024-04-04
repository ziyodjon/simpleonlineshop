//console.log(parseInt(window.location.search));

const url = window.location.search;
const temp = /[0-9/.]+/

const res = url.match(temp)

const resp = await fetch('https://dummyjson.com/products/'+res[0]);

const data = await resp.json();

console.log(data);



// brand
// : 
// "Samsung"
// category
// : 
// "smartphones"
// description
// : 
// "Samsung's new variant which goes beyond Galaxy to the Universe"
// discountPercentage
// : 
// 15.46
// id
// : 
// 3
// images
// : 
// ['https://cdn.dummyjson.com/product-images/3/1.jpg']
// price
// : 
// 1249
// rating
// : 
// 4.09
// stock
// : 
// 36
// thumbnail
// : 
// "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg"
// title
// : 
// "Samsung Universe 9"

const detailGoodsInfo = document.querySelector('.detail-goods-info');

detailGoodsInfo.innerHTML = `
<div class="row">
    <div class="col-md-6">
        <div class="detail-img">
            <img src="${data.thumbnail}"/>
        </div>
    </div>
    <div class="col-md-6">
    <div class="detail-info">
        <h1>${data.title}</h1>
        <h4><b>Description:</b> ${data.description}</h4>
        <h5><b>Brand:</b> ${data.brand}</h5>
        <h5><b>Category:</b> ${data.category}</h5>
        <h5><b>Discount percentage:</b> ${data.discountPercentage}</h5>
        <h5><b>Price:</b> ${data.price} $</h5>
        <h5><b>Rating:</b> ${data.rating}</h5>
        <h5><b>Stock:</b> ${data.stock}</h5>
    </div>
    </div>
</div>
`;


