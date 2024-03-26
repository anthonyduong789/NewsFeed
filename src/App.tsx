import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import.meta.env.MODE;

// Access the environment variable correctly
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

// Construct the API URL with the apiKey variable
const apiUrl = `https://newsapi.org/v2/everything?q=Apple&from=2024-03-25&sortBy=popularity&apiKey=${apiKey}`;


  interface Source {
    id: null | string,
    name: string
  }

  interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content: string;
    
  }
  interface NewsApiData {
    status: string;
    totalResults: number;
    articles: Article[];
  }

async function fetchNewsData(apiUrl: string): Promise<NewsApiData> {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  // TYPE GUARD
  const data: NewsApiData = await response.json();
  return data;
}




function App() {
  const [count, setCount] = useState(0)


  // Define the Source interface
  fetchNewsData(apiUrl).then((data) => {
  


  /*
  used as Source type in api call
  **/



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
