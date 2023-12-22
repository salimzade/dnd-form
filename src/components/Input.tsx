interface Props {
  placeholder?: string;
  type?: string;
  label?: string;
}

const Input = ({ placeholder, type = "text", label }: Props) => {
  return (
    <div className="relative flex flex-col w-full">
      {label && <label className="text-black mb-1">{label}</label>}
      <input
        placeholder={placeholder}
        type={type}
        className="py-2 px-2 rounded-md mt-1 outline-0 border-2 border-gray-200"
      />
    </div>
  );
};

export default Input;
