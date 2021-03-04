import React from 'react';

function Item({ title, id, clickHandler, v1, v2, v3 }) {
  return (
    <div>
      {title}
      <button data-testid={id} onClick={() => clickHandler(id)}>
        Press it
      </button>
      <ul>
        <li>{v1}</li>
        <li>{v2}</li>
        <li>{v3}</li>
      </ul>
    </div>
  );
}
export default Item;
