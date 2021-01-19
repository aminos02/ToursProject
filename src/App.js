import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
      setLoading(true)
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (error) { 
          setLoading(true)
          console.log(error)
      }
   
  };
  useEffect(() => {
    fetchTours();
  }, []);
    return loading  ? (
    <main>
      <Loading />
    </main>
  ) : (
    <main>
      <Tours tours={tours}/>
    </main>
  )
}

export default App;
