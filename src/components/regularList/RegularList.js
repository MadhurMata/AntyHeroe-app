export const RegularList = ({ items, resourceName, itemComponent: ItemComponent, styles }) => {
  if (items.length === 0)
    return (
      <div>
        <h5>{`Sorry we couldn't find any heroe`}</h5>
      </div>
    );
  return (
    <div className={styles}>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};
