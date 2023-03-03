import './top-articles.css';
import { TopArticleItem } from './top-article-item';

export function TopArticles() {
  const topArticles = [
    {
      src: '/images/image-retro-pcs.jpg',
      rank: '01',
      header: 'Reviving Retro PCs',
      subHeader: 'What happens when old PCs are given modern upgrades?',
    },
    {
      src: '/images/image-top-laptops.jpg',
      rank: '02',
      header: 'Top 10 Laptops of 2022',
      subHeader: 'Our best picks for various needs and budgets.',
    },
    {
      src: '/images/image-gaming-growth.jpg',
      rank: '03',
      header: 'The Growth of Gaming',
      subHeader: 'How the pandemic has sparked fresh opportunities.',
    },
  ];

  return (
    <div className="top-articles">
      {topArticles.map((x, index) => (
        <TopArticleItem key={`top-article-item-${index}`} src={x.src} rank={x.rank} header={x.header} subHeader={x.subHeader} />
      ))}
    </div>
  );
}
