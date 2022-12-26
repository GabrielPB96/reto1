import "./styles.css";
import { Contacto } from "./models/contact.class";
import AComponent from "./components/pure/A";

export default function App() {
  const defaultContacto = new Contacto(
    "Gabriel",
    "Pantoja",
    "gabrielpb@gmail.com",
    false
  );
  return (
    <div className="App">
      <AComponent contacto={defaultContacto}></AComponent>
    </div>
  );
}
