function performSearch() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const posts = document.querySelectorAll(".post");
    var visible = 0;

    posts.forEach(post => {
        const title = post.querySelector("a").innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            post.style.display = "";
            visible++;
        } else {
            post.style.display = "none";
        }
    });

    var noResults = document.getElementById("no-results");
    if (noResults) {
        noResults.style.display = visible === 0 ? "block" : "none";
    }
}

document.getElementById("search-button").addEventListener("click", performSearch);

document.getElementById("search-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

document.getElementById("search-input").addEventListener("input", performSearch);
