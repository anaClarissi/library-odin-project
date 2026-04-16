const addButton = document.querySelector(".btn-add");

const cancelButton = document.querySelector(".btn-cancel");

const modal = document.querySelector(".modal");

addButton.addEventListener("click", () => {
    
    modal.classList.add("active");

});


cancelButton.addEventListener("click", () => {

    modal.classList.remove("active");

});