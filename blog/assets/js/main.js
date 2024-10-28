function performSearch() {
    
    const searchTerm = document.getElementById("search-input").value.toLowerCase();

    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const title = post.querySelector("h3").innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            post.style.display = ""; // Show post
        } else {
            post.style.display = "none"; // Hide post
        }
    });
}

document.getElementById("search-button").addEventListener("click", performSearch);

document.getElementById("search-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});
