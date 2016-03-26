export const components = (groups, group) => {
  if (group) {
    return Object.keys(groups[group]).map((name) => ({
      name,
      component: groups[group][name],
    }));
  }

  return Object.keys(groups).reduce((allComponents, group) => ([
    ...allComponents,
    ...components(groups, group),
  ]), []);
};
