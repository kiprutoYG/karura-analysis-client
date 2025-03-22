import { useEffect, useState } from "react";

export default function NewsCard() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("https://karura-analysis-server.onrender.com/news")
          .then((res) => res.json())
          .then((data) => setNews(data))
          .catch((error) => console.error("Error fetching news:", error));
      }, []);


    return (
        <div className="news-card"> 
            <h2 className="font-semibold text-sm md:text-xl py-4 mx-2">Latest News on Forests in Kenya</h2>
            {news.length === 0 ? (
                <p>Loading news</p>
            ): (
                <ul>
                    {news.slice(0,6).map((article, index) => (
                        <li key={index}>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="py-4"><span className="text-amber-300">{article.title}</span></a>
                            <p>{article.description} - {new Date(article.publishedAt).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}