export default function Card() {
  return (
    <article className="grid" style={{ alignItems: "center" }}>
      <div>
        <h3>Nombre de lista</h3>
        <p>Breve descripción</p>
      </div>
      <div>Pendiente</div>
      <button>Eliminar</button>
    </article>
  );
}
