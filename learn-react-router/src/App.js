import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemberDetails from "./MemberDetails";
import MembersDisplay from "./MembersDisplay";
import Error from "./Error";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="member" element={<MembersDisplay />} />
          <Route path="member/:memId" element={<MemberDetails />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
