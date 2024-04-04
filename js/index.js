import * as api from './api.js';
import * as helpers from './helpers.js';

const navBar = document.getElementById('navbar');
const userprofile = document.querySelector('.userprofile');
const authData = helpers.getFromLocalStorage('authData');
const productsRow = document.querySelector('.main-good-list');


const LIMIT =  12;


if(!authData){
    userprofile.append(helpers.createLoginForm(userprofile));
}else{
    userprofile.appendChild(helpers.createUserProfile(authData));
}

const products = await api.getProductsFunc(0,LIMIT);


helpers.printProducts(products,productsRow);

helpers.printPagination(productsRow,LIMIT);

const logout = document.querySelector('.logout');
logout.addEventListener('click',(event) => {
    helpers.removeFromLocalStorage('authData');
});