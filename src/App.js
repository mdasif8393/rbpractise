import logo from './logo.svg';
import './App.css';
import { Alert, Badge, Carousel, Dropdown } from 'react-bootstrap';
import News from '../src/components/News'
import { useEffect, useState } from 'react';



function App() {
  const [news, setNews] = useState([]);

  useEffect(() =>{
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=eafd1117a39245c2a2aaf0c6cf1ddfd7')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  } ,[])
  return (
    <div>
      {
        news.map(news => <News news={news}></News>)
      }
    </div>
  );
}

export default App;
