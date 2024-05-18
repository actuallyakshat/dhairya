import { Route, Routes } from "react-router-dom";
import Landing from "../Landing/Landing";
import Session from "../Session/Session";
import Dashboard from "../Dashboard/Dashboard";

export default function NavigationRoutes() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/session" element={<Session />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
