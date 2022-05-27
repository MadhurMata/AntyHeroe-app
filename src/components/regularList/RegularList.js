export const RegularList = ({ data, resourceName, itemComponent: ItemComponent }) => {
  return data ? (
    <div className="list-grid">
      {data.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  ) : (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};
