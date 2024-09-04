import "./Player.css";
const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <div className="player-card">
      <img src={image} alt={`${name}`} className="player-image" />
      <div className="player-details">
        <h2>{name}</h2>
        <p>Team: {team}</p>
        <p>Nationality: {nationality}</p>
        <p>Jersey Number: {jerseyNumber}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
};

export default Player;
