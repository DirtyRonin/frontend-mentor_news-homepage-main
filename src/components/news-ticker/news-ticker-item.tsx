import './news-ticker-item.css';

interface newsTickerItemProps {
  header: string;
  newsText: string;
}

export function NewsTickerItem({ header, newsText }: newsTickerItemProps) {
  return (
    <div className="news-ticker-item">
      <a href='#'>{header}</a>
      <p>{newsText}</p>
    </div>
  );
}
