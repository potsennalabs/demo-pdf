import { useState } from "react";

import "./App.css";
import { PdfTron } from "./PdfTron";
import { PsPdfKit } from "./PSPdfKit";

function App() {
  const [type, setType] = useState("pdftron");

  return (
    <div className="App">
      <div>
        <button onClick={() => setType("pdftron")}>pdftron</button>
        <button onClick={() => setType("pspdfkit")}>pspdfkit</button>
      </div>
      {type === "pdftron" ? <PdfTron /> : <PsPdfKit />}
    </div>
  );
}

export default App;
