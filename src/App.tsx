import { DndContext } from "@dnd-kit/core";
import SidePanel from "./blocks/SidePanel";
import EditorPanel from "./blocks/EditorPanel";
import SettingsPanel from "./blocks/SettingsPanel";
import { useComponentContext } from "./context";

function App() {
  const { onDragEnd } = useComponentContext();
  return (
    <div className="w-screen h-screen flex py-2 py-2">
      <DndContext onDragEnd={onDragEnd}>
        <SidePanel components={["Input", "Select", "Radio", "Checkbox"]} />
        <EditorPanel />
        <SettingsPanel />
      </DndContext>
    </div>
  );
}

export default App;
