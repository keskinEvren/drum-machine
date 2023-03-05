function Drum(props) {
  const play = () => {
    new Audio(props.sound).play();
    console.log("hello")
  };

  return (
    <div className="drum" onClick={play}>
      <div className="key">{props.letter}</div>
    </div>
  );
}
export default Drum;
