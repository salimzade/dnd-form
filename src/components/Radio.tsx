interface Props {
  label?: string;
  choices?: string;
  value?: string;
  id?: string;
}

const Radio = ({ label, choices, value, id }: Props) => {
  return (
    <div className="relative flex flex-col w-full">
      {label && <label className="text-black mb-1">{label}</label>}
      <div className={"flex flex-row justify-center items-center"}>
        <input type={"radio"} value={value} id={id}/>
        {choices && <label className={"text-gray-600 mx-3"}>{choices}</label>}
      </div>
    </div>
  );
};

export default Radio;
