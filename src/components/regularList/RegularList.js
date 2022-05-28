export const RegularList = ({
  items,
  loading,
  error,
  resourceName,
  itemComponent: ItemComponent
}) => {
  if (loading)
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );

  if (error) return JSON.stringify(error, null, 2);

  return (
    <div className="list-grid">
      {items.data.results.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};
