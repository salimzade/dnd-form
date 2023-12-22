import React from "react";
import { useComponentContext } from "../context";
import SettingsField from "./SettingsField";
interface Props {
  fields: string[];
  component: Component;
}

const Properties = ({ fields, component }: Props) => {
  const { deleteComponent, updateProperties } = useComponentContext();
  const onChangeField: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const [id, field] = name?.split("-");
    updateProperties(id, field, value);
  };
  return (
    <div className="m-4 w-full flex-col flex">
      <div className="flex justify-between">
        <button
          onClick={deleteComponent}
          className="text-white bg-red-600 rounded-md hover:bg-red-700 border-2 border-red-600 py-1 px-2"
        >
          <svg
            className={"fill-white"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px">
            <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"/></svg>
        </button>
      </div>
      <div className="flex flex-col space-y-5 mt-10">
        {SettingsField(fields, component, onChangeField)}
      </div>
    </div>
  );
};

export default Properties;
