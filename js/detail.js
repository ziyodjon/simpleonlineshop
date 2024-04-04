import * as api from './api.js';
import * as helpers from './helpers.js';

const url = window.location.search;
const data = await api.getDetailPage(url);
const detailGoodsInfo = document.querySelector('.detail-goods-info');
const userprofile = document.querySelector('.userprofile');
const authData = helpers.getFromLocalStorage('authData');


if(!authData){
    userprofile.append(createLoginForm());
}else{
    userprofile.appendChild(helpers.createUserProfile(authData));
}

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


