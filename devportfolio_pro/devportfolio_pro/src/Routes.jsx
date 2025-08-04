import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ConnectCollaborate from './pages/connect-collaborate';
import ProjectShowcase from './pages/project-showcase';
import ProfessionalStory from './pages/professional-story';
import ExperienceJourney from './pages/experience-journey';
import DynamicHome from './pages/dynamic-home';
import InteractiveSkillsLab from './pages/interactive-skills-lab';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ConnectCollaborate />} />
        <Route path="/connect-collaborate" element={<ConnectCollaborate />} />
        <Route path="/project-showcase" element={<ProjectShowcase />} />
        <Route path="/professional-story" element={<ProfessionalStory />} />
        <Route path="/experience-journey" element={<ExperienceJourney />} />
        <Route path="/dynamic-home" element={<DynamicHome />} />
        <Route path="/interactive-skills-lab" element={<InteractiveSkillsLab />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
