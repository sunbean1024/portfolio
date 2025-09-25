
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Chip from '@/components/common/Chip';
import { useHomeData } from '@/hooks/useApi';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen">
            <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                <span className="inline-block">안녕하세요,</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  박해빈
                </span>
                <span className="inline-block">입니다</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
                프론트엔드 개발자로서 Vue와 React로 웹 애플리케이션을 만들고 있습니다.
                사내 개발 문화 개선과 웹 접근성 향상을 고민하며, 사용자와 동료에 가까이 다가가는 제품을 지향합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Chip variant="blue">React</Chip>
                <Chip variant="purple">Vue</Chip>
                <Chip variant="pink">Next.js</Chip>
                <Chip variant="indigo">TypeScript</Chip>
              </div>
              <div className="flex space-x-4 pt-4">
                <button className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-8 py-3 rounded-full font-medium hover-shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer whitespace-nowrap animate-pulse">
                  이력서 다운로드
                </button>
                <button className="border-2 border-purple-300 text-purple-600 px-8 py-3 rounded-full font-medium hover-bg-purple-50 hover:scale-105 transform transition-all duration-300 cursor-pointer whitespace-nowrap">
                  연락하기
                </button>
              </div>
            </div>
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="w-full h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-3xl flex items-center justify-center overflow-hidden hover:scale-105 transform transition-all duration-500">
                {/* Animated Code Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 gap-2 p-4 h-full">
                    {Array.from({length: 64}).map((_, i) => (
                      <div 
                        key={i} 
                        className={`rounded animate-pulse ${i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'}`}
                        style={{
                          height: `${Math.random() * 60 + 20}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transform transition-all duration-500">
                    <span className="text-5xl">👩🏻‍💻</span>
                  </div>
                  
                  <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800 animate-fade-up">프론트엔드 개발자</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up">경력 사항</h2>
          <div className="space-y-8">
            {companies.map((company, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-500 animate-slide-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 flex-shrink-0 hover:rotate-12 transform transition-all duration-300">
                    <img 
                      src={company.logo}
                      alt={`${company.name} 로고`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-purple-600 transition-colors duration-300">{company.name}</h3>
                    <p className="text-lg font-medium text-purple-600 mb-2 animate-pulse">{company.position}</p>
                    <p className="text-gray-500 mb-3">{company.period}</p>
                    <p className="text-gray-700 leading-relaxed">{company.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up">주요 프로젝트</h2>
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">프로젝트 데이터를 불러올 수 없습니다.</p>
            </div>
          ) : (
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="md:grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full animate-pulse">
                        {projects[currentProject].period}
                      </span>
                      <div className="flex space-x-2">
                        <button 
                          onClick={prevProject}
                          className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full hover:scale-110 transform transition-all duration-300 cursor-pointer"
                        >
                          <i className="ri-arrow-left-line text-gray-600"></i>
                        </button>
                        <button 
                          onClick={nextProject}
                          className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full hover:scale-110 transform transition-all duration-300 cursor-pointer"
                        >
                          <i className="ri-arrow-right-line text-gray-600"></i>
                        </button>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 animate-slide-in-left">{projects[currentProject].title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg animate-fade-in-up">{projects[currentProject].description}</p>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].tech.map((tech, index) => (
                        <Chip key={index} variant="blue" size="sm">
                          {tech}
                        </Chip>
                      ))}
                    </div>
                    <button 
                      onClick={handleProjectDetail}
                      className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-3 rounded-full font-medium hover-shadow-lg hover:scale-110 transform transition-all duration-300 cursor-pointer whitespace-nowrap animate-pulse"
                    >
                      자세히 보기
                    </button>
                  </div>
                </div>
                <div className="h-80 md:h-full overflow-hidden">
                  <img 
                    src={projects[currentProject].imageUrl}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover object-top hover:scale-110 transform transition-all duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Project indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                    index === currentProject 
                      ? 'bg-purple-400 w-8 animate-pulse' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in-up">연락처</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="mailto:sunbeen1024@gmail.com" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 hover:scale-110 transform transition-all duration-300 cursor-pointer animate-slide-in-up" style={{animationDelay: '0.4s'}}>
              <i className="ri-mail-line text-xl"></i>
              <span>sunbeen1024@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
