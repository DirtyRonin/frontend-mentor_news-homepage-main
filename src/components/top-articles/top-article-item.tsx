import './top-articles.css';

interface topArticleItemProps {
  src: string;
  rank: string;
  header: string;
  subHeader: string;
}

export function TopArticleItem({ src, rank, header, subHeader }: topArticleItemProps) {
  return (
    <div className="top-article-item">
      <img className="top-article-image" alt="" src={src} />
      <div className="top-article-text">
        <h2>{rank}</h2>
        <a href="#">{header}</a>
        <p>{subHeader}</p>
      </div>
    </div>
  );
}
