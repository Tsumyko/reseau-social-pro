import React, { useState, ReactNode } from 'react';
import { Menu, X, MapPin, Bell, User, Settings } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-lg lg:translate-x-0`}>
        <nav className="h-full flex flex-col p-4">
          <h1 className="text-xl font-bold mb-8">MonRéseauPro</h1>
          {/* Menu items */}
        </nav>
      </aside>

      {/* Main content */}
      <main className="lg:pl-64">
        <header className="h-16 bg-white shadow-sm flex items-center px-4">
          <button className="lg:hidden" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </header>
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;