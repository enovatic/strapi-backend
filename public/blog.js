const displayArticles = async () => {
    const res = await fetch('/api/articles');
    const articles = await res.json();
    const container = document.getElementById('articles');
    console.log("displayArticles articles", articles);
    articles.forEach(article => {
        const image = document.createElement('img');
        image.setAttribute('src', article.thumbnail.url);
        container.appendChild(image);
    });
};