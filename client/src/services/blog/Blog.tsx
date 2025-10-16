import React, { useState } from "react";
import { latest } from "../../components/dates/BlogData";
import Info from "./Info";
import "./Blog.scss";

interface BlogItem {
  url: string;
  date: string;
  headline: string;
  text: string;
  btn: string;
}

const BlogCard: React.FC<BlogItem & { onReadMore: () => void }> = ({
  url,
  date,
  headline,
  text,
  btn,
  onReadMore,
}) => {
  return (
    <article className="blog__card">
      <img className="blog__card-image" src={url} alt={headline} />
      <div className="blog__card-content">
        <p className="blog__card-date">{date}</p>
        <h2 className="blog__card-headline">{headline}</h2>
        <p className="blog__card-text">{text}</p>
        <button className="blog__card-btn" onClick={onReadMore}>
          {btn}
        </button>
      </div>
    </article>
  );
};

const Blog: React.FC = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <section className="blog">
      <h1 className="blog__title">Latest Blog Posts</h1>
      <div className="blog__list">
        {latest.slice(0, 3).map((item, index) => (
          <BlogCard
            key={index}
            url={item.url}
            date={item.date}
            headline={item.headline}
            text={item.text}
            btn={item.btn}
            onReadMore={() => setShowInfo(true)}
          />
        ))}
      </div>

      <Info isVisible={showInfo} onClose={() => setShowInfo(false)} />
    </section>
  );
};

export default Blog;
