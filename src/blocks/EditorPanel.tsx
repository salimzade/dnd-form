import { useDroppable } from "@dnd-kit/core";
import { useComponentContext } from "../context";
import RenderComponent from "../components/RenderComponent";

interface Props {
  component: Component;
}

const EditorPanel = () => {
  const { components: draggedComponents, setSelectedComponent } =
    useComponentContext();
  const { isOver, setNodeRef } = useDroppable({ id: "drop-blocks" });
  return (
    <div
      ref={setNodeRef}
      className={"flex flex-col w-6/12 bg-gray-50 border-2 border-gray-200 rounded-lg mx-2"}
    >
      <div className={"border-b-2 border-b-gray-200 py-2 px-4 p"}>
        <h3>editor</h3>
      </div>
      <div className="list flex items-center justify-center mx-auto py-10 w-8/12 space-y-6 flex-col">
        {draggedComponents &&
          draggedComponents.length > 0 &&
          draggedComponents.map((component, index) => (
            <div
              key={index}
              onClick={(e) => setSelectedComponent(component)}
              className={"py-1 relative px-2 py-3 border-2 border-dashed w-full"}
            >
              <div className="absolute top-0 left-0 opacity-5 z-50 w-full h-full bg-white" />
              <RenderComponent component={component} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default EditorPanel;
