import ArticleActions from './ArticleActions';
import { Link } from 'react-router-dom';
import React from 'react';
import ReactPlayer from 'react-player'

const ArticleMeta = props => {
  const article = props.article;
  return (


      <div className="article-preview">


          <div className="col-md-4">
              <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                           width='auto%'
                           height='auto'
              />
          </div>

          <div className="container">

              <Link to={`/@${article.author.username}`} className={"author"}>
                <img src={article.author.image} width='35'/>

              </Link>

                  <Link to={`/@${article.author.username}`} className="author">
                      {article.author.username}
                   </Link>
                  <span className="date">
                      <h24>
                   {new Date(article.createdAt).toDateString().split(' ').slice(1,3).join(' ')}
                      </h24>
                      </span>



              <ArticleActions canModify={props.canModify} article={article} />

          </div>
    </div>
  );
};




export default ArticleMeta;
