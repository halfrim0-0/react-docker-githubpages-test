import { useState } from "react";
import Footer from "../components/common/Footer";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("Page1");

  return (
    <div>
      {currentPage == "Page1" ? <Page1 /> : <Page2 />}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
