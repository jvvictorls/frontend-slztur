import '../styles/thumb.css';
type ThumbProps = {
  src: string;
  text: string;
};

function Thumb(props: ThumbProps) {
  return (
    <div className="thumb-container">
      <div className="thumb-image">
        <img src={props.src} alt={props.text} />
      </div>
      <h1>{props.text}</h1>
    </div>
  );
}

export default Thumb;
