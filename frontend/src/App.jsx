import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../Components/Home";
import Dashboard from "../Components/Admin";
import NewEmployee from "../Components/Admin/NewEmployee";
const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/admin" element={<Dashboard/>}/>
      <Route path="/admin/new-employee" element={<NewEmployee/>}/>
    </Routes>
    </BrowserRouter>
  )
};
export default App;
