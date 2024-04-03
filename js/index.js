import * as api from './api.js';
import * as helpers from './helpers.js';

const navBar = document.getElementById('navbar');

const LIMIT =  12;
//const token = await api.getToken('john@mail.com','changeme');

//helpers.saveToLocalStorage('token',token.access_token);

// console.log(token.access_token);


function createLoginForm(){
    const form = helpers.createEl('form',['navbar-form','navbar-right']);
    const formGroup1 = helpers.createEl('div',['form-group']);
    const formGroup2 = helpers.createEl('div',['form-group']);
    const inputEmail = helpers.createEl('input',['form-control']);
    const inputPassword = helpers.createEl('input',['form-control']);
    const submitBtn = helpers.createEl('button',['btn','btn-success']);

    inputEmail.placeholder = 'Email';
    inputPassword.placeholder = 'Password';
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Enter';
    formGroup1.append(inputEmail);
    formGroup2.append(inputPassword);
    form.append(formGroup1,formGroup2,submitBtn);

    form.addEventListener('click',(e)=>{
        e.preventDefault;
    });

    return form;
}

navBar.append(createLoginForm());



const productsRow = document.querySelector('.main-good-list');

const getProductsFunc = async (page) => {
    const products = await api.getProducts(`https://dummyjson.com/products?limit=${LIMIT}&skip=${(page - 1) * LIMIT}`);

    return await products
}

function printPagination(){
    const  total = 100 / LIMIT;
    console.log(Math.ceil(total));
    
    const paginationWrap = document.querySelector('.pagination');
    for(let i = 1; Math.ceil(total) >= i; i ++){
        
        const paginationList = helpers.createEl('li', ['list']);
        const paginationLink = helpers.createEl('a',['link']);
        paginationLink.addEventListener('click',async (event) => {
            const page = event.target.innerHTML;
            const products = await getProductsFunc(page);
            //console.log(products);
            productsRow.innerHTML = '';
            printProducts(products);
        });
        paginationList.append(paginationLink);
        paginationLink.textContent += i;
        paginationWrap.append(paginationList);
    }
    

    return paginationWrap;
}


const products = await getProductsFunc(0);

function printProducts(products){
    products['products'].forEach((el,indx) => {
        const oneProduct = `
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
            <img class="resp" src="${el.images[0]}" alt="${el.title}">
            <div class="caption">
                <h3 class="line-clamp">${el.title}</h3>
                <p class="line-clamp">${el.description}</p>
                <p>
                    <a href="#" class="btn btn-primary" role="button">${el.price} $</a> 
                    <a href="#" class="btn btn-success" role="button">More information</a>
                </p>
            </div>
            </div>
        </div>`;
    
        // const moreBtn = document.querySelector('.btn-success');
        // moreBtn.addEventListener('click',(eve)=>{
        //     console.log(eve);
        // });
    
        productsRow.innerHTML += oneProduct;
    });
}

printProducts(products);

printPagination();