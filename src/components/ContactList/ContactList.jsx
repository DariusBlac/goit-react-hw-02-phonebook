export const ContactList = ({ array }) => {
  return (
    <ul>
      {array.map(el => {
        return (
          <li key={el.id}>
            <p>
              {el.name}: {el.number}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
