import Card from "./Card";

function List({ items }) {
  return (
    <div className="list">
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          desc={item.desc}
          core={item.core}
        />
      ))}
    </div>
  );
}

export default List;
