const Title = (props) => {
  return (
    <h2>
      {props.functionLeft && <span className="secondary-color">{props.functionLeft}</span>}
      {props.children}
      {props.functionRight && <span className="secondary-color">{props.functionRight}</span>}
    </h2>
  );
};

export default Title;
