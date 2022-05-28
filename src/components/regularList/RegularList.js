export const RegularList = ({ items, resourceName, itemComponent: ItemComponent, styles }) => {
  return (
    <div className={styles}>
      {items && items.map((item, i) => <ItemComponent key={i} {...{ [resourceName]: item }} />)}
    </div>
  );
};
