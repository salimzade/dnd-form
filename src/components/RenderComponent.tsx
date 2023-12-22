import Checkbox from "./Checkbox";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
interface Props {
  component: Component;
}
const RenderComponent = ({ component }: Props) => {
  if (component.type.toLowerCase() === "checkbox") {
    return <Checkbox {...component.properties} />;
  } else if (component.type.toLowerCase() === "input") {
    return <Input {...component.properties} />;
  }
  else if (component.type.toLowerCase() === "radio") {
    return <Radio {...component.properties} />
  }
  else if (component.type.toLowerCase() === "select") {
    return <Select {...component.properties} />
  }
  return <div title="undefined component" />;
};

export default RenderComponent;