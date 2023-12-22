import { useComponentContext } from "../context";
import Component from "../components/Component";
interface SidePanelProps {
  components: string[];
}

const SidePanel = ({ components }: SidePanelProps) => {
  const { components: draggedItems } = useComponentContext();
  return (
    <div className="w-3/12 bg-gray-50 rounded-lg border-2 border-gray-200">
      <div className={"border-b py-2 px-4"}>
        <h3>Elements</h3>
      </div>
      <div className="" id="componets">
        {components.map((component: string) => (
          <Component key={component} title={component} />
        ))}
      </div>
    </div>
  );
};
export default SidePanel;
