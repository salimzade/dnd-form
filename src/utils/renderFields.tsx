export function renderProptiyFields(component: Component) {
  if (!!component) {
    if (component.type === "Input") {
      return ["placeholder", "label", "type"];
    } else if (component.type === "Radio") {
      return ["label", "choices", "id", "value"];
    }
    else if (component.type === "Checkbox") {
      return ["label", "choices", "id", "value"];
    }
    else if (component.type === "Select") {
      return ["label", "options", "value"];
    }
  }
  return [];
}
