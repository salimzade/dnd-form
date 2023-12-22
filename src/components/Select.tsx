import React from "react";
interface Props {
  options?: Array<string>[];
  label?: string;
  value?: string;
}

const Select = ({options, label, value}: Props) => {
  return (
    <div className={"relative flex flex-col w-full"}>
      {label && <label className="text-black mb-1">{label}</label>}
      <select className={"py-2 px-2 rounded-md mt-1 outline-0 border-2 border-gray-200"}>
        {options?.map(item => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default Select;