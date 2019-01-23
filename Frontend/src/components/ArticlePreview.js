import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';
import { ReactPlayer } from 'react-player';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});

const ArticlePreview = props => {
  const article = props.article;
  const favoriteButtonClass = article.favorited ?
    FAVORITED_CLASS :
    NOT_FAVORITED_CLASS;

  const handleClick = ev => {
    ev.preventDefault();
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

  return (
    <div className="article-preview">
      <div className="article-me//ta">
        <div className="image">
          <div className="pull-lg-right">
            <Link to={`/article/${article.slug}`} className="preview-link">
              <image
                  src="https://images.unsplash.com/photo-1543362905-f2423ef4e0f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
                  width='200' height='auto'>
              </image>
            </Link>
          </div>
        </div>


        <Link to={`/article/${article.slug}`} className="preview-link">
          <h4>{article.title}</h4>


          <p>{article.description}</p>
          {/*<span>Read more...</span>
        <ul className="tag-list">
          {
            article.tagList.map(tag => {
              return (
                <li className="tag-default tag-pill tag-outline" key={tag}>
                  {tag}
                </li>
              )
            })
          }
        </ul>*/}
        </Link>





        {/*<Link to={`/@${article.author.username}`}>
          <img src={article.author.image} alt={article.author.username} />
        </Link>*/}

        <div className="Container">

          <h6><Link className="info" to={`/@${article.author.username}`} >
            {article.author.username}
          </Link>
          </h6>
          <button className={favoriteButtonClass} onClick={handleClick}>
            <i className="ion-heart"></i> {article.favoritesCount}
          </button>

        </div>


         {/*<span className="date">
            {new Date(article.createdAt).toDateString()}
           {new Date(article.createdAt).toDateString().split(' ').slice(1,3).join(' ')}
          </span>*/}



         {/*<div className="pull-md-right">
           <img src="https://images.unsplash.com/photo-1543362905-f2423ef4e0f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
               width={800} height={800}>
           </img>

         </div>*/}

        </div>

        {/*<div className="player">
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
        </div>*/}

      </div>






  );
}

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
