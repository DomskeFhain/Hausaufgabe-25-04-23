import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Wetter from "./Wetter";

const städte = ["Berlin", "Hamburg", "München", "Köln", "Frankfurt"];

const StadtAuswahl = () => {
  const [ausgewählteStadt, setAusgewählteStadt] = useState();
  const navigate = useNavigate();

  const handleStadtAuswahl = (city) => {
    setAusgewählteStadt(city);
    navigate(`/wetter/${city}`);
  };

  return (
    <div>
      {!ausgewählteStadt ? (
        <div>
          <h1>Wähle deine Stadt</h1>
          <div>
            {städte.map((stadt) => (
              <button key={stadt} onClick={() => handleStadtAuswahl(stadt)}>
                {stadt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <Wetter city={ausgewählteStadt} />
      )}
    </div>
  );
};

export default StadtAuswahl;