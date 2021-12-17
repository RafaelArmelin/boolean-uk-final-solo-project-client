import { useNavigate } from "react-router-dom";
import "../index.css";

function ArtistsList(props) {
  const { artists } = props;

  const navigate = useNavigate();

  return (
    <ul className="center">
      {artists.map((artist, index) => {
        console.log("artists: ", artist.artistProfile);
        return (
          <body className="artists-list">
            <li key={index}>
              <h3>{artist.name}</h3>
              <img
                src={artist.artistProfile.imageUrl}
                alt={artist.name}
                width="500px"
                height="500px"
              />
              <button onClick={() => navigate(`/artists/${artist.id}`)}>
                View Profile
              </button>
            </li>
          </body>
        );
      })}
    </ul>
  );
}

export default ArtistsList;
