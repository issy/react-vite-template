import Navbar from "components/Navbar";
import HomePage from "pages/HomePage";
import { Route, Routes } from "react-router-dom";

export default function AppSessionRoot() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl m-auto py-8 h-screen">
        <Routes>
          <Route element={<HomePage />} index />
        </Routes>
      </main>
    </>
  );
}
