import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateBookingForm from "./CreateBookingForm";
import "../index.css";

function ArtistsView(props) {
  const { hideForm, setHideForm } = props;
  const [artist, setArtist] = useState([]);

  const { artistId } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/artists/${artistId}`)
      .then((res) => res.json())
      .then((artistData) => {
        setArtist(artistData);
        console.log("Artist", artistData);
      });
  }, [artistId]);

  return (
    <main className="">
      <div>
        <h3>{artist.name}</h3>
        <img src={artist.imageUrl} alt={artist.name} />
        <h4>About {artist.name}:</h4>
        <p>{artist.about}</p>
        <button onClick={() => setHideForm(!hideForm)} className="button">
          {hideForm ? "Book" : "Cancel"}
        </button>
        <div className="artist-booking-title">
          <h5>{artist.name}'s Appointments:</h5>
        </div>
      </div>
      <div></div>
    </main>
  );
}

export default ArtistsView;
