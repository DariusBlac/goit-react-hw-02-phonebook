export const Filter = ({ filterContact }) => {
  return (
    <div>
      <h3>Filter by Name</h3>
      <input type="text" onChange={filterContact} />
    </div>
  );
};
