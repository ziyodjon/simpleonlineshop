import * as api from './api.js';

function createEl(tagName,className = []){
    const neweEl = document.createElement(tagName);
    if(className.length > 0){
        //const changeClass = className.join(' ');
        neweEl.classList.add(...className);
    }

    return neweEl;
}

function saveToLocalStorage(name,data){
    localStorage.setItem(name, JSON.stringify(data));
}

function getFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name));
}

function removeFromLocalStorage(name){
    localStorage.removeItem(name);
}

function createUserProfile(authData){
    const userProfileWrap = createEl('div',['userprofile2']);
    userProfileWrap.innerHTML = `
    <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      ${authData.firstName}  ${authData.lastName} <span class="caret"></span>
    </button>
        <ul class="dropdown-menu">
        <li><a href="profile.html">Profile</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#" class="logout">Exit</a></li>
        </ul>
  </div>`;


    return userProfileWrap;
}

function createLoginForm(userprofile){
    const form = createEl('form',['navbar-form','navbar-right']);
    const formGroup1 = createEl('div',['form-group']);
    const formGroup2 = createEl('div',['form-group']);
    const inputEmail = createEl('input',['form-control']);
    const inputPassword = createEl('input',['form-control']);
    const submitBtn = createEl('button',['btn','btn-success']);

    inputEmail.placeholder = 'Login';
    inputPassword.placeholder = 'Password';
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Enter';
    formGroup1.append(inputEmail);
    formGroup2.append(inputPassword);
    form.append(formGroup1,formGroup2,submitBtn);

    submitBtn.addEventListener('click',async (event)=>{
        event.preventDefault();
        inputEmail.value = 'kminchelle';
        inputPassword.value = '0lelplR';
        const authData = await api.getToken(inputEmail.value,inputPassword.value);
        saveToLocalStorage('authData',authData);
        userprofile.innerHTML = '';
        userprofile.append(createUserProfile(authData));
    });

    return form;
}

function printProducts(products,productsRow){
    products['products'].forEach((el) => {
        const oneProduct = `
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
            <img class="resp" src="${el.images[0]}" alt="${el.title}">
            <div class="caption">
                <h3 class="line-clamp">${el.title}</h3>
                <p class="line-clamp">${el.description}</p>
                <p>
                    <a href="#" class="btn btn-primary" role="button">${el.price} $</a> 
                    <a href="detail.html?prodId=${el.id}" class="btn btn-success" role="button">More information</a>
                </p>
            </div>
            </div>
        </div>`;
    
        productsRow.innerHTML += oneProduct;
    });
}

function printPagination(productsRow,LIMIT){
    const  total = 100 / LIMIT;
    
    const paginationWrap = document.querySelector('.pagination');
    for(let i = 1; Math.ceil(total) >= i; i ++){
        
        const paginationList = createEl('li', ['list']);
        const paginationLink = createEl('a',['link']);
        paginationLink.addEventListener('click',async (event) => {
            const page = event.target.innerHTML;
            const products = await api.getProductsFunc(page,LIMIT);
            //console.log(products);
            productsRow.innerHTML = '';
            printProducts(products,productsRow);
        });
        paginationList.append(paginationLink);
        paginationLink.textContent += i;
        paginationWrap.append(paginationList);
    }
    

    return paginationWrap;
}


export {
    createEl,
    saveToLocalStorage,
    getFromLocalStorage,
    removeFromLocalStorage,
    createUserProfile,
    createLoginForm,
    printPagination,
    printProducts,
}