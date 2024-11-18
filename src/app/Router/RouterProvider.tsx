import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterListPage } from "../pages/CharacterListPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { DetailPage } from "../pages/DetailPage";

export const RouterProvider: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CharacterListPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>
);
