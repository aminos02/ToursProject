import React, { useState, useEffect } from "react";
import data from "./data.json";
import Tours from "./Tours";
import Loading from "./Loading";
// const url = "https://github.com/aminos02/ToursProject/blob/master/data.json";
const toursContext = React.createContext();
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  console.log(data);
  const removeTour = (id) => {
    setTours((tours) => tours.filter((tour) => tour.id !== id));
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      //   const response = await fetch(url);
      //   const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <toursContext.Provider value={{ removeTour }}>
        <Tours tours={tours} />
      </toursContext.Provider>
    </main>
  );
}

export default App;

export { toursContext };
