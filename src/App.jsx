import "./App.css";
import DataForm from "./components/DataForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Notfound from "./pages/Notfound";
import Data from "./pages/Data";
import DataTable from "./pages/DataTable";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/form" element={<DataForm />}></Route>
          <Route path="/data" element={<Data />}></Route>
          <Route path="datatable" element={<DataTable />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
