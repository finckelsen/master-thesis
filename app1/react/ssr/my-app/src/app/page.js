import React from 'react';
import './App.css'
import Counter from './components/Counter';
import BackgroundAnimation from './components/BackgroundAnimation';

const getData = async () => {
  const response = await fetch('https://api.sampleapis.com/codingresources/codingResources');
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

// React component to render the page
const Home = async () => {
  const data = await getData();
  return ( 
    <div>
        <header className="App-header">

            <BackgroundAnimation/>          
            <div className="content">
            <h1>This is the homepage</h1>
            <p>It contains data from an api-call</p>
          </div>
        </header>
      <h1>Resources</h1>
      {data.map((resource) => (
        <div key={resource.id} style={{ marginBottom: '20px' }}>
          <h3>{resource.description}</h3>
          <p>
            URL: <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.url}</a>
          </p>
          <p><strong>Topics:</strong> {resource.topics.join(', ')}</p>
          <p><strong>Types:</strong> {resource.types.join(', ')}</p>
          <p><strong>Levels:</strong> {resource.levels.join(', ')}</p>
        </div>
      ))}
    <Counter/>
    </div>
    
  );
}

export const dynamic = 'force-dynamic'; // Ensure dynamic behavior
export default Home;
