import { NewsTickerItem } from './news-ticker-item';
import './news-ticker.css';

export function NewsTicker() {
  const news = [
    {
      header: 'Hydrogen VS Electric Cars',
      newsText: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      header: 'The Downsides of AI Artistry',
      newsText: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      header: 'Is VC Funding Drying Up?',
      newsText: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ];

  const joinNewsTickerItemsWithSeperatorInBetween = (): JSX.Element[] => {
    const newsElements = news.map((x, index) => <NewsTickerItem key={`NewsTickerItem-${index}`} header={x.header} newsText={x.newsText} />);

    return newsElements.reduce((prev, current, index) => {
      prev.push(current);

      if (index + 1 !== newsElements.length) {
        prev.push(<div key={`NewsTickerItem-Seperator-${index}`} className="seperator"></div>);
      }

      return prev;
    }, [] as JSX.Element[]);
  };

  return (
    <div className="news-ticker-container">
      {joinNewsTickerItemsWithSeperatorInBetween()}
    </div>
  );
}
