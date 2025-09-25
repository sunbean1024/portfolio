
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Chip from '@/components/common/Chip';
import { useProjectDetailData } from '@/hooks/useApi';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // React Query를 사용한 데이터 fetching
  const { project, otherProjects, isLoading, isError, error } = useProjectDetailData(
    parseInt(id || '1')
  );

  useEffect(() => {
    if (!isLoading && !isError && project) {
    setIsVisible(true);
    }
  }, [isLoading, isError, project]);


  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">프로젝트 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-xl text-gray-600 mb-4">프로젝트 정보를 불러오는 중 오류가 발생했습니다.</p>
          <p className="text-sm text-gray-500 mb-6">{error?.message}</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transform transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500 text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">프로젝트를 찾을 수 없습니다</h1>
          <p className="text-gray-600 mb-6">요청하신 프로젝트가 존재하지 않습니다.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transform transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const nextProject = () => {
    if (otherProjects.length > 0) {
    setCurrentProjectIndex((prev) => (prev + 1) % Math.ceil(otherProjects.length / 3));
    }
  };

  const prevProject = () => {
    if (otherProjects.length > 0) {
    setCurrentProjectIndex((prev) => (prev - 1 + Math.ceil(otherProjects.length / 3)) % Math.ceil(otherProjects.length / 3));
    }
  };

  const getVisibleProjects = () => {
    const startIndex = currentProjectIndex * 3;
    return otherProjects.slice(startIndex, startIndex + 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header showBackButton={true} backButtonText="돌아가기" />

      {/* Project Header */}
      <section className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                {project.period}
              </span>
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                {project.role}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
            <div className="flex justify-center space-x-4 pt-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transform transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-github-line text-xl"></i>
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transform transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-external-link-line text-xl"></i>
                  <span>링크</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-[400px] md:h-[450px] lg:h-[500px] bg-gray-100 flex items-center justify-center">
              {project.images && project.images.length > 0 ? (
                <>
                  <img 
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} 스크린샷 ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain hover:scale-105 transform transition-all duration-700"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <i className="ri-image-line text-4xl text-gray-400"></i>
                  </div>
                  <p className="text-gray-500 text-lg font-medium">이미지 준비 중</p>
                </div>
              )}
              
              {/* Image Navigation - Only show when images exist */}
              {project.images && project.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-arrow-left-line text-gray-700 text-xl"></i>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-arrow-right-line text-gray-700 text-xl"></i>
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                          index === currentImageIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <i className="ri-information-line text-purple-600 mr-3"></i>
                  프로젝트 개요
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.detailedDescription}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-tools-line text-purple-600 mr-3"></i>
                  사용 기술
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <Chip key={index} variant="purple" size="md">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-trophy-line text-purple-600 mr-3"></i>
                  주요 기여
                </h2>
                <div className="space-y-4">
                  {project.contributions.map((contribution, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg hover:scale-105 transform transition-all duration-300">
                      <i className="ri-check-line text-green-500 text-xl mt-0.5"></i>
                      <span className="text-gray-700 leading-relaxed">{contribution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-shield-check-line text-purple-600 mr-3"></i>
                  주요 도전과제
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg hover:scale-105 transform transition-all duration-300">
                      <i className="ri-alert-line text-red-500 text-xl mt-0.5"></i>
                      <span className="text-gray-700 leading-relaxed">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-lightbulb-line text-purple-600 mr-3"></i>
                  프로젝트 회고
                </h2>
                <div className="space-y-4">
                  {project.reflection.map((reflection, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg hover:scale-105 transform transition-all duration-300">
                      <i className="ri-lightbulb-line text-purple-500 text-xl mt-0.5"></i>
                      <span className="text-gray-700 leading-relaxed">{reflection}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-12 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-800">다른 프로젝트 보기</h2>
            {otherProjects.length > 3 && (
              <div className="flex space-x-2">
                <button 
                  onClick={prevProject}
                  className="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-50 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-arrow-left-line text-gray-600"></i>
                </button>
                <button 
                  onClick={nextProject}
                  className="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-50 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-arrow-right-line text-gray-600"></i>
                </button>
              </div>
            )}
          </div>
          
          <div className="relative overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
              {getVisibleProjects().map((otherProject) => (
                <div key={otherProject.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition-all duration-500">
                  <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                    {otherProject.images && otherProject.images.length > 0 ? (
                      <img 
                        src={otherProject.images[0]}
                        alt={otherProject.title}
                        className="w-full h-full object-cover object-top hover:scale-110 transform transition-all duration-700"
                      />
                    ) : (
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <i className="ri-image-line text-xl text-gray-400"></i>
                        </div>
                        <p className="text-gray-500 text-sm font-medium">이미지 준비 중</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{otherProject.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{otherProject.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {otherProject.tech.slice(0, 3).map((tech, index) => (
                        <Chip key={index} variant="blue" size="sm">
                          {tech}
                        </Chip>
                      ))}
                    </div>
                    <button 
                      onClick={() => navigate(`/project/${otherProject.id}`)}
                      className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-2 rounded-lg font-medium hover:scale-105 transform transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      자세히 보기
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 프로젝트 인디케이터 */}
            {otherProjects.length > 3 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.ceil(otherProjects.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                      index === currentProjectIndex 
                        ? 'bg-purple-400 w-8 animate-pulse' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
