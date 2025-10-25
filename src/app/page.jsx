import Card from "../components/Card";

export default function Home() {
  return (
    <main className="container">
      <div>
        <h1>To-do app de Gaby</h1>
        <p>Almacena y organiza tus pendientes.</p>
      </div>
      <div>
        <div className="grid" style={{ marginBottom: "1rem" }}>
          <p>Descripción</p>
          <p>Estado</p>
          <button><img style={{width:"40px"}} src="/public/plus-svgrepo-com.svg" alt="Añadir" /></button>
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
