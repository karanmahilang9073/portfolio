import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <div className="fixed inset-0 bg-[url('/src/assets/grid.svg')] bg-center opacity-10 pointer-events-none"></div>
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto backdrop-blur-sm bg-gray-900/30 rounded-2xl p-6 shadow-2xl border border-gray-700/50">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;