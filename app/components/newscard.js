import { useEffect, useState } from "react";

export default function NewsCard() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/news")
          .then((res) => res.json())
          .then((data) => setNews(data))
          .catch((error) => console.error("Error fetching news:", error));
      }, []);


    return (
        <div className="news-card"> 
            <h2>Latest news on Karura Forest</h2>
            {news.length === 0 ? (
                <p>Loading news</p>
            ): (
                <ul>
                    {news.slice(0,6).map((article, index) => (
                        <li key={index}>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                            <p>{article.description} - {new Date(article.publishedAt).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}