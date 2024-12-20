import React, { useState } from 'react';
import { Menu, X, MapPin, Bell, User, Settings } from 'lucide-react';

const Layout: React.FC = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Menu latéral */}
      <aside className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-lg transition-transform duration-200 ease-in-out lg:translate-x-0 z-20`}>
        <nav className="h-full flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold">MonRéseauPro</h1>
          </div>
          {/* Menu items */}
        </nav>
      </aside>

      {/* Contenu principal */}
      <main className="lg:pl-64">
        <header className="h-16 bg-white shadow-sm flex items-center px-4">
          <button className="lg:hidden" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </header>
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;