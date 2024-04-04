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


export {
    createEl,
    saveToLocalStorage,
    getFromLocalStorage,
    removeFromLocalStorage,
}