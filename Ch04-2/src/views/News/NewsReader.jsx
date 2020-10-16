import React from 'react';
import { useParams } from 'react-router-dom'; 
import { connect } from 'react-redux';
 
const NewsReader = props => {  
  const { id: targetNewsId } = useParams();
  const targetNews = props.news.find(theNews => (
    String(theNews.id) === String(targetNewsId)
  ));

  return (
    <div>
      <h1>您正在閱讀 {targetNews.name}</h1>
      <p>{targetNews.describe}</p>
    </div>
  );
};

const mapStateToProps = state => ({ 
  news: state.news.news,
});
 
export default connect(mapStateToProps)(NewsReader);
