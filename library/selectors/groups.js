export const groups = componentGroups => (
  Object.keys(componentGroups).map((name) => ({
    name,
  }))
);
