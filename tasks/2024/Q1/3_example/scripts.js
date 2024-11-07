// Sample article data (normally you'd fetch this data from an API or JSON file)
const articles = [
    { title: 'Learning JavaScript', date: '2024-11-01', summary: 'An introduction to JavaScript programming.', link: 'article1.html' },
    { title: 'Web Design Basics', date: '2024-10-15', summary: 'Understanding the basics of web design and layout.', link: 'article2.html' },
    { title: 'Responsive Design', date: '2024-10-05', summary: 'How to make your website look good on all devices.', link: 'article3.html' },
    { title: 'CSS Grid vs Flexbox', date: '2024-09-28', summary: 'A comparison between CSS Grid and Flexbox for layout.', link: 'article4.html' },
    { title: 'JavaScript ES6 Features', date: '2024-09-20', summary: 'New features in ES6 that make JavaScript more powerful.', link: 'article5.html' }
];

let currentArticleIndex = 0;
const articlesPerPage = 2;

const loadArticles = () => {
    const container = document.getElementById('articles-container');
    container.innerHTML = '';

    // Load the next set of articles
    for (let i = currentArticleIndex; i < currentArticleIndex + articlesPerPage && i < articles.length; i++) {
        const article = articles[i];
        const articleCard = document.createElement('div');
        articleCard.classList.add('article-card');
        articleCard.innerHTML = `
            <h3>${article.title}</h3>
            <p><strong>Published on:</strong> ${article.date}</p>
            <p>${article.summary}</p>
            <a href="${article.link}">Read more</a>
        `;
        container.appendChild(articleCard);
    }

    // Update the index for the next page
    currentArticleIndex += articlesPerPage;

    // Hide "Load More" button if no more articles to load
    if (currentArticleIndex >= articles.length) {
        document.getElementById('load-more').style.display = 'none';
    }
};

// Load initial articles
window.onload = () => {
    loadArticles();

    // Add event listener for "Load More" button
    document.getElementById('load-more').addEventListener('click', loadArticles);
};
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
