// App.jsx

export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export default function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="#fce4ec"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Evening glow in Santorini"
        />
        <MoodBoardItem
          color="#e3f2fd"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Waves on a peaceful shore"
        />
        <MoodBoardItem
          color="#f1f8e9"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="A walk through the wild grass"
        />
        <MoodBoardItem
          color="#f3e5f5"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="The calm gaze of a traveler"
        />
        <MoodBoardItem
          color="#ede7f6"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Adventure aboard a quiet ship"
        />
      </div>
    </div>
  );
}