import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function RoutesPrincipal (path: string) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>hola</p>} />
      </Routes>
    </BrowserRouter>
  )
}

function Test() {
  return (
    <p>prueba</p>
  );
}