export const findAttribute = (component, attributeName) => {
  const foundComponent = component.find(`[data-test='${attributeName}']`);
  return foundComponent;
};