import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useHomeData } from '@/hooks/useApi';
import { HeroSection, ExperienceSection, ProjectsSection, ContactSection } from '@/components/home';

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  // React Query를 사용한 데이터 fetching
  const { companies, projects, isLoading, isError, error } = useHomeData();

  useEffect(() => {
    if (!isLoading && !isError) {
      setIsVisible(true);
    }
  }, [isLoading, isError]);

  const nextProject = () => {
    if (projects.length > 0) {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }
  };

  const prevProject = () => {
    if (projects.length > 0) {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  const handleProjectDetail = () => {
    if (projects.length > 0) {
      navigate(`/project/${projects[currentProject].id}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">데이터를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-xl text-gray-600 mb-4">데이터를 불러오는 중 오류가 발생했습니다.</p>
          <p className="text-sm text-gray-500">{error?.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      <HeroSection isVisible={isVisible} />
      
      <ExperienceSection companies={companies} />
      
      <ProjectsSection
        projects={projects}
        currentProject={currentProject}
        onNextProject={nextProject}
        onPrevProject={prevProject}
        onSetCurrentProject={setCurrentProject}
        onProjectDetail={handleProjectDetail}
      />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
}