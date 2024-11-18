import "./App.css";
import { CharactersProvider } from "./app/providers/CharacterProvicer/CharacterProvider";
import { RouterProvider } from "./app/Router/RouterProvider";

const App: React.FC = () => {
  return <CharactersProvider>
    <RouterProvider />
  </CharactersProvider>;};

export default App;

/**
 * DUDAS: 
 * La factory es lo mismo que el mapper?
 */
