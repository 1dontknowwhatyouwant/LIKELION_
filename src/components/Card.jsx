function Card({ title, desc, core }) {
  return (
    <article className="card">
      <h3>
        {title}
        {core && <span className="badge">핵심</span>}
      </h3>
      <p>{desc}</p>
    </article>
  );
}

export default Card;
