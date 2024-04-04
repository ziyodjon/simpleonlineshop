import * as helpers from './helpers.js';

const userProfilePage = document.querySelector('.userprofilepage');
const authData = helpers.getFromLocalStorage('authData');
const userprofile = document.querySelector('.userprofile');

function createUserProfile(authData){
    const userProfileWrap = helpers.createEl('div',['userprofile2']);
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
  </div>
    `;

    
    return userProfileWrap;
}

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
    userprofile.appendChild(createUserProfile(authData));
}

createUserProfilePage();