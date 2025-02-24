const year = new Date().getFullYear();

const showHide = () => {
    let x = document.getElementById("hide");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
