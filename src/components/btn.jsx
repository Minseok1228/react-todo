const Button = ({ btnFunc, item, children }) => {
  return <button onClick={() => btnFunc(item)}>{children}</button>;
};

export default Button;
