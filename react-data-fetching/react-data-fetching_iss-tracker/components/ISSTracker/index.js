//import { useEffect, useState } from "react";
import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const id = "25544";
const URL = `https://api.wheretheiss.at/v1/satellites/${id}`;

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function ISSTracker() {
  const {
    data: coords,
    error,
    isLoading,
    mutate,
  } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading.....</div>;

  /*
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  */

  /*async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  }
  */

  /*useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  */

  function handleReload() {
    mutate();
  }

  return (
    <main>
      <Map longitude={coords?.longitude} latitude={coords?.latitude} />
      <Controls
        longitude={coords?.longitude}
        latitude={coords?.latitude}
        onRefresh={() => handleReload()}
      />
    </main>
  );
}
