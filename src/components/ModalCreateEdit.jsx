export default function ModalCreateEdit() {
  return (
    <dialog open>
      <article>
        <header>
          <button aria-label="Close" rel="prev"></button>
          <input
            type="text"
            name="text"
            placeholder="Text"
            aria-label="Text"
          ></input>
        </header>
        <input
          type="text"
          name="text"
          placeholder="Text"
          aria-label="Text"
        ></input>
        <ul>
          <li>Date: Saturday, April 15</li>
          <li>Time: 10:00am - 12:00pm</li>
        </ul>
        <footer>
          <button>Guardar cambios</button>
        </footer>
      </article>
    </dialog>
  );
}
