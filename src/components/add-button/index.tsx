type Props = {
  children: React.ReactNode;
  inputRef: React.RefObject<HTMLInputElement>;
};

const Button = ({ inputRef, children }: Props) => {
  const handleClick = () => {
    console.log(inputRef.current?.value);
    inputRef.current ? (inputRef.current.value = "") : null;
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="focus:outline-none text-white bg-purple-700 active:bg-purple-600 hover:bg-purple-800 rounded px-5 py-2"
    >
      {children}
    </button>
  );
};

export default Button;
