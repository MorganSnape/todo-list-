import Card from "../components/Card";

export default function Home() {
  return (
    <main>
      <div>
        <h1>To-do app de Gaby</h1>
        <p>Almacena y organiza tus pendientes.</p>
      </div>
      <div>
        <div className="grid">
          <p>Descripción</p>
          <p>Estado</p>
          <button>➕</button>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </main>
  );
}
