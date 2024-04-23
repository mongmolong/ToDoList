const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");
// const likeButtons = document.querySelector(".like");


function addItem() {

    if (inputText.value.trim() === "") {  //공백 또는 스페이스 공간
        return
    };

    //like
    const like = document.createElement("span");
    const likeIcon = document.createElement("i");

    like.classList.add("like");
    likeIcon.classList.add("material-symbols-outlined");
    likeIcon.innerText = "favorite";
    like.appendChild(likeIcon);

    //item
    const item = document.createElement("span");
    item.classList.add("item");
    item.innerText = inputText.value;

    //manage
    const manage = document.createElement("span");
    const checkIcon = document.createElement("i");
    const closeIcon = document.createElement("i");

    manage.classList.add("manage");
    checkIcon.classList.add("material-symbols-outlined", "check");
    closeIcon.classList.add("material-symbols-outlined", "close");

    checkIcon.classList.add("check");
    checkIcon.innerText = "check";
    closeIcon.classList.add("close");
    closeIcon.innerText = "close";
    manage.appendChild(checkIcon);
    manage.appendChild(closeIcon);


    const li = document.createElement("li");

    //event
    like.addEventListener("click", e => {
        const target = e.target;
        const text = target.innerText === "favorite" ? "heart_plus" : "favorite"
        target.innerText = text;
    });
    checkIcon.addEventListener("click", e => {
        const target = e.target.parentNode.parentNode;
        target.classList.add("done");
    });
    closeIcon.addEventListener("click", e => {
        const target = e.target.parentNode.parentNode;
        list.removeChild(target);
    });


    li.appendChild(like);
    li.appendChild(item);
    li.appendChild(manage);
    list.appendChild(li);

    inputText.value = "";
    inputText.focus();
}

inputText.addEventListener("keypress", e => {
    if (e.keyCode === 13) {
        addItem();
    }
});


addButton.addEventListener("click", addItem);