import Properties from "../components/Properties";
import { useComponentContext } from "../context";
import { renderProptiyFields } from "../utils/renderFields";

const SettingsPanel = () => {
  const { selectedComponent } = useComponentContext();
  return (
    <section className="flex flex-col bg-gray-50 w-3/12 flex border-gray-200 border-2 rounded-lg">
      <div className={"border-b-2 border-b-gray-200 py-2 px-4 p"}>
        <h3>Settings</h3>
      </div>
      {selectedComponent ? (
        <Properties
          component={selectedComponent}
          fields={renderProptiyFields(selectedComponent)}
        />
      ) : (
        <p className="my-auto text-center font-normal text-lg mx-10 text-slate-300">
          Select any component to edit
        </p>
      )}
    </section>
  );
};

export default SettingsPanel;
