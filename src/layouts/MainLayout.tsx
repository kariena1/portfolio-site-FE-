import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
