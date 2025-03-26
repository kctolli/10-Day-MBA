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

// Service Worker
(() => {
    const serviceWorker = '/serviceWorker.js';
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
            navigator.serviceWorker
                .register(serviceWorker)
                .then(res => console.log("service worker registered"))
                .catch(err => console.log("service worker not registered", err));
        });
    }
})();
