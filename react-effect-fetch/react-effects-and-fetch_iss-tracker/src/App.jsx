import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    const response = await fetch(URL);
    const coords = await response.json();
    // to get the coords
    console.log(coords);
    setCoords({ longitude: coords.longitude, latitude: coords.latitude });
  }

  // setInterval return the intervalID ->The clearInterval() method of the Window interface
  // cancels a timed, repeating action which was previously established by a call to
  // setInterval(). If the parameter provided does not identify a previously
  // established action, this method does nothing.

  useEffect(() => {
    const intervalID = setInterval(getISSCoords, 5 * 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
