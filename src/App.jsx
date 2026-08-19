import { BrowserRouter, Routes, Route } from "react-router";
import PortalPublico from "./layouts/PortalPublico";
import Home from './routes/Portal/Home';
import Login from './routes/Portal/Login';
import SaaS from './routes/Portal/SaaS';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Portal público */}
        <Route path="/" element={<PortalPublico/>}>
          <Route index element={<Home />} />
          <Route path="saas" element={<SaaS />} />
          <Route path="login" element={<Login />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;