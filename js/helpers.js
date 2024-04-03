function createEl(tagName,className = []){
    const neweEl = document.createElement(tagName);
    if(className.length > 0){
        //const changeClass = className.join(' ');
        neweEl.classList.add(...className);
    }

    return neweEl;
}

function saveToLocalStorage(name,data){
    localStorage.setItem(name, data);
}


export {
    createEl,
    saveToLocalStorage,
}