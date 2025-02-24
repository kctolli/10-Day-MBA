const year = new Date().getFullYear();

const showHide = (id) => {
    let x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const hide = (id) => {
    let x = document.getElementById(id);
    x.style.display = "none";
}

