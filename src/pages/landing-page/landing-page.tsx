import './landing-page.css';
import { LeadArticle } from '../../components/lead-article';
import { NewsTicker } from '../../components/news-ticker';
import { TopArticles } from '../../components/top-articles';

export function LandingPage() {
  return (
    <div id="landing-page">
      <section className="lead-article-section">
        <LeadArticle />
      </section>
      <section className="news-ticker-section">
        <NewsTicker />
      </section>
      <section className="top-three-articles-section">
        <TopArticles />
      </section>
    </div>
  );
}
