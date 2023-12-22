import { useDraggable } from "@dnd-kit/core";
import { COMPONENT } from "../types/types";
import cuid from "cuid";

const Component = ({ title }: { title: string }) => {
  const { setNodeRef, transform, listeners, attributes } = useDraggable({
    id: `${COMPONENT}-${title}`, // COMPONENT-Checkbox for button
    data: { type: title, id: cuid(), properties: {} },
  });
  const style = transform
    ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={
        "flex justify-start items-center component mt-5 px-4 py-2 text-black font-medium text-lg bg-white mx-6 mb-2 py-3 rounded-lg border-2 border-gray-200"
      }
    >
      <div className={"flex justify-center items-center py-1 px-2 mr-2 rounded-lg bg-violet-100"}>

      </div>
      {title}
    </div>
  );
};

export default Component;