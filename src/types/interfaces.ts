import { DragEndEvent } from "@dnd-kit/core";

export interface IContext {
  components: Component[];
  onDragEnd: (event: DragEndEvent) => void;
  selectedComponent?: Component;
  setSelectedComponent: (selected: Component) => void;
  deleteComponent: () => void;
  updateProperties: (id: string, field: string, value: string) => void;
}