import './lead-article.css';
import LeadImg from '../../assets/images/image-web-3-desktop.jpg';
import LeadImgMobile from '../../assets/images/image-web-3-mobile.jpg';

export function LeadArticle() {
  return (
    <div className="lead-article-container">
      <picture>
        <source media="(min-width:901px)" srcSet={LeadImg} />
        <source media="(max-width:900px)" srcSet={LeadImgMobile} />
        <img className="image" alt="" src={LeadImg} />
      </picture>
      <div className="text-passage">
        <h1 className="title">The Bright Future of Web 3.0?</h1>
        <div className="subheading">
          <p>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really
            fulfilling its promise?
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}
