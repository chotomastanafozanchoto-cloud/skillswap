import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { ROUTES } from './lib/routes';

import Home from './pages/Home';
import FindWork from './pages/FindWork';
import FindTalent from './pages/FindTalent';
import SkillSwap from './pages/SkillSwap';
import ProjectJourney from './pages/ProjectJourney';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import AdminStudio from './pages/AdminStudio';
import { RobotVoiceIntro } from './components/RobotIntro/RobotVoiceIntro';

export default function App() {
  // When website opens, the FIRST major experience is the 3D robot intro
  const [isIntroOpen, setIsIntroOpen] = useState<boolean>(true);

  const handleReplayIntro = () => {
    setIsIntroOpen(true);
  };

  return (
    <>
      {/* Full-Screen 3D Robot Opening Scene */}
      <RobotVoiceIntro
        isOpen={isIntroOpen}
        onComplete={() => setIsIntroOpen(false)}
      />

      {/* Main Website Application */}
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout onReplayIntro={handleReplayIntro} />}>
            <Route path={ROUTES.home} element={<Home onReplayIntro={handleReplayIntro} />} />
            <Route path={ROUTES.findWork} element={<FindWork />} />
            <Route path={ROUTES.findTalent} element={<FindTalent />} />
            <Route path={ROUTES.skillSwap} element={<SkillSwap />} />
            <Route path={ROUTES.projectJourney} element={<ProjectJourney />} />
            <Route path={ROUTES.about} element={<About onReplayIntro={handleReplayIntro} />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.signUp} element={<SignUp />} />
            <Route path={ROUTES.dashboard} element={<Dashboard />} />
            <Route path={ROUTES.adminStudio} element={<AdminStudio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
