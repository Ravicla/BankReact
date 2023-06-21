import React, { useState } from 'react';
import { SideBar } from '../components/SideBar';
import { TopBar } from '../components/TopBar';
import { Footer } from '../views/dashboard/Footer';
import { BeginPage } from '../views/dashboard/BeginPage';

export const PageWrapper = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div id="wrapper">
      <SideBar isSidebarOpen={isSidebarOpen} />      
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <BeginPage />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PageWrapper;
