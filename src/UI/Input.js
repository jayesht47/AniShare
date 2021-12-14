import classses from './Input.module.css';

const Input = (props) => {
  return (
    <div className="">
      <label htmlFor={props.label} className="text-white text-xl" >{props.label}</label>
      <input
        className="rounded-sm my-3 p-1 w-full  xs:h-10 xs:p-2"
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
