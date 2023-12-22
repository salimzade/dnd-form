import React from "react";
const SettingsField = (
  fields: string[],
  component: Component,
  onChange: React.ChangeEventHandler<HTMLInputElement>
) => {
  return fields.map((field) => {
    return (
      <div key={`${component.id}-${field}`} className="w-full flex flex-col">
        <label className="text-lg">{`Enter ${field}`}</label>
        <input
          onChange={onChange}
          name={`${component.id}-${field}`}
          placeholder={`${field}`}
          className={"py-2 px-2 rounded-md mt-1 outline-0 border-2 border-gray-200"}
        />
      </div>
    );
  });
};

export default SettingsField;