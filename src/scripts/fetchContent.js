function loadPage(page){
    fetch("pages/" + page)
    .then(res => res.text())
    .then(html => {
    document.getElementById("content").innerHTML = html;
    });
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("href");
    loadPage(page);
    history.pushState({}, "", page);
    });
});

loadPage("cenacle.html");
