
import { useEffect, useState } from "react";
import "./App.css";

// Access the environment variable correctly
const apiKey = import.meta.env.VITE_SOME_KEY;
const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;


/*
 

 */




async function getTopHeadlinesFromBBC(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data; // Returning the data might be useful if this function is part of a larger application
}

type Source =  {
  id: null | string;
  name: string;
}

type Article =  {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

type NewsApiData =  {
  status: string;
  totalResults: number;
  articles: Article[];
}





async function TypeScriptExample(url: string): Promise<NewsApiData> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}



/*
-"source": {
"id": "wired",
"name": "Wired"
},
**/

function App(): JSX.Element {
  // Fetch the news data

  useEffect(() => {
    // getTopHeadlinesFromBBC(url)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(
    //       "There was an error fetching the top headlines from BBC News",
    //       error
    //     );
    //   });

    TypeScriptExample(url)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the top headlines from BBC News",
          error
        );
      });
  }, []);

  // Define the Source interface

  /*
  used as Source type in api call
  **/

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
