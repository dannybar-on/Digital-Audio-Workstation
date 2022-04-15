export const ControlBtn = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.icon}
    </button>
  );
};
