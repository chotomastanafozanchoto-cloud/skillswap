import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  onReplayIntro?: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ onReplayIntro }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-darkText">
      {/* Sticky Glass Navbar */}
      <Navbar onReplayIntro={onReplayIntro} />

      {/* Main Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
