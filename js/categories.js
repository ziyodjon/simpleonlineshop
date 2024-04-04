import * as api from './api.js';
import * as helpers from './helpers.js';

const navBar = document.getElementById('navbar');
const userprofile = document.querySelector('.userprofile');
const authData = helpers.getFromLocalStorage('authData');
const productsRow = document.querySelector('.main-good-list');
const categoriesWrap = document.querySelector('.categories');


const LIMIT =  12;



if(!authData){
    userprofile.append(helpers.createLoginForm(userprofile));
}else{
    userprofile.appendChild(helpers.createUserProfile(authData));
}

const categories = await api.getCategories();

categories.forEach((el) => {
    const catBtns = helpers.createEl('span',['catBtn','label','label-info']);
    catBtns.append(el);
    catBtns.addEventListener('click',async (event) => {
        const catName = event.target.innerHTML;
        const products = await api.getProductsByCategory(catName);
        productsRow.innerHTML = '';
        helpers.printProducts(products,productsRow);
        console.log(products);
    });
    categoriesWrap.append(catBtns);
});

const products = await api.getProductsFunc(0,LIMIT);


helpers.printProducts(products,productsRow);

helpers.printPagination(productsRow,LIMIT);

const logout = document.querySelector('.logout');
logout.addEventListener('click',(event) => {
    helpers.removeFromLocalStorage('authData');
});


const addNewProd = await api.addNewProduct('NewTile');
console.log(addNewProd);

const update = await api.updateCurrentProduct(1);

console.log(update);