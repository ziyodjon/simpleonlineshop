import * as helpers from './helpers.js';

const userProfilePage = document.querySelector('.userprofilepage');
const authData = helpers.getFromLocalStorage('authData');
const userprofile = document.querySelector('.userprofile');



function createUserProfilePage(){
    const userInfo = `
    <div class="media">
        <div class="media-left">
        <a href="#">
            <img class="media-object" width="100px" src="${authData.image}" alt="...">
        </a>
        </div>
        <div class="media-body">
        <h4 class="media-heading">${authData.firstName} ${authData.lastName}</h4>
        <div class="infobox"><b>First name:</b> ${authData.firstName}</div>
        <div class="infobox"><b>Last name:</b> ${authData.lastName}</div>
        <div class="infobox"><b>Email:</b> ${authData.email}</div>
        <div class="infobox"><b>Login name:</b> ${authData.username}</div>
        </div>
    </div>
    `;
    userProfilePage.innerHTML = userInfo;
    return userProfilePage;
}

if(!authData){
    userprofile.append(createLoginForm());
}else{
    userprofile.appendChild(helpers.createUserProfile(authData));
}

createUserProfilePage();