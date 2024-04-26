const trendingBooks = [
    {
        title: "Book 1",
        author: "Author 1",
        link: "#",
    },
    {
        title: "Book 2",
        author: "Author 2",
        link: "#",
    },
];


function generateTrendingBooksList() {
    const trendingBooksList = document.getElementById("trending-books");

    trendingBooks.forEach((book) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = ${book.title} by ${book.author};
        link.href = book.link;
        listItem.appendChild(link);
        trendingBooksList.appendChild(listItem);
    });
}