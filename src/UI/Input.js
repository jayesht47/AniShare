import classses from './Input.module.css';

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        label={props.label}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
