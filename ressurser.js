const articles = [
    {
        title: "First Breaking News",
        content: "This is the content of the first news article. Add a short description or introduction here.",
        
    },
    {
        title: "Second Amazing Story",
        content: "This is the content of the second story. Expand the description here for the second article.",
        imgs: "picvideo/beerdude.jpg"
        
       
    }
];

function getArticles() {
    articles.forEach((article, index) => {
        const article_element = document.getElementById(`article-${index + 1}`);
        if (article_element ) {
            const content_div= document.createElement("div");
            const title = document.createElement("h2");
            title.textContent= article.title;
            content_div.appendChild(title)
        
            const content= document.createElement("p");
            content.textContent=article.content;
            content_div.appendChild(content)
            if (article.imgs) {
                const images = document.createElement("img");
                images.src = article.imgs;
                images.alt = article.title;
                images.classList.add("article-image");
                content_div.appendChild(images);
            }
        
            article_element.appendChild(content_div)
        }
    
       
    });

   
}
getArticles();


window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(function(el) {
        const scrollPosition = window.scrollY;
        el.style.backgroundPositionY = `${scrollPosition * 0.5}px`; 
    });
});
