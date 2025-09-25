
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Chip from '@/components/common/Chip';

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce 플랫폼 개발",
      description: "React와 Node.js를 활용한 대규모 쇼핑몰 시스템 구축. 결제 시스템, 재고 관리, 사용자 관리 등 전반적인 기능 개발을 담당했습니다.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      period: "2023.03 - 2023.12",
      imageUrl: "https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20shopping%20cart%2C%20product%20listings%2C%20pastel%20blue%20and%20purple%20color%20scheme%2C%20professional%20UI%2FUX%20design%2C%20minimalist%20layout%2C%20white%20background%20with%20soft%20shadows&width=400&height=300&seq=project1&orientation=landscape"
    },
    {
      id: 2,
      title: "모바일 앱 개발",
      description: "React Native를 사용한 크로스 플랫폼 모바일 애플리케이션 개발. 실시간 채팅, 위치 기반 서비스, 푸시 알림 등을 구현했습니다.",
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
      period: "2022.08 - 2023.02",
      imageUrl: "https://readdy.ai/api/search-image?query=mobile%20app%20interface%20mockup%20on%20smartphone%20screen%2C%20modern%20UI%20design%2C%20chat%20messages%2C%20location%20services%2C%20pastel%20pink%20and%20blue%20colors%2C%20clean%20minimalist%20design%2C%20white%20background%20with%20subtle%20gradients&width=400&height=300&seq=project2&orientation=landscape"
    },
    {
      id: 3,
      title: "데이터 시각화 대시보드",
      description: "D3.js와 React를 활용한 실시간 데이터 시각화 대시보드 구축. 복잡한 데이터를 직관적인 차트와 그래프로 표현했습니다.",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      period: "2022.01 - 2022.07",
      imageUrl: "https://readdy.ai/api/search-image?query=data%20visualization%20dashboard%20with%20beautiful%20charts%20and%20graphs%2C%20analytics%20interface%2C%20pastel%20purple%20and%20blue%20color%20palette%2C%20modern%20business%20dashboard%2C%20clean%20white%20background%2C%20professional%20data%20visualization&width=400&height=300&seq=project3&orientation=landscape"
    },
    {
      id: 4,
      title: "AI 챗봇 시스템",
      description: "자연어 처리를 활용한 고객 서비스 챗봇 개발. 머신러닝 모델을 통해 사용자 의도를 파악하고 적절한 응답을 제공합니다.",
      tech: ["Python", "TensorFlow", "Flask", "MySQL"],
      period: "2021.06 - 2021.12",
      imageUrl: "https://readdy.ai/api/search-image?query=AI%20chatbot%20interface%20with%20conversation%20bubbles%2C%20modern%20chat%20UI%20design%2C%20artificial%20intelligence%20assistant%2C%20pastel%20blue%20and%20pink%20colors%2C%20clean%20messaging%20interface%2C%20white%20background&width=400&height=300&seq=project4&orientation=landscape"
    },
    {
      id: 5,
      title: "블록체인 NFT 마켓플레이스",
      description: "Web3 기술을 활용한 NFT 거래 플랫폼 개발. 스마트 컨트랙트와 메타마스크 연동을 통한 안전한 디지털 자산 거래 시스템을 구축했습니다.",
      tech: ["React", "Web3.js", "Solidity", "Ethereum", "IPFS"],
      period: "2023.01 - 2023.06",
      imageUrl: "https://readdy.ai/api/search-image?query=NFT%20marketplace%20interface%20with%20digital%20art%20gallery%2C%20blockchain%20technology%2C%20crypto%20wallet%20integration%2C%20modern%20web3%20design%2C%20pastel%20purple%20and%20blue%20colors%2C%20clean%20futuristic%20layout%2C%20white%20background&width=400&height=300&seq=project5&orientation=landscape"
    }
  ];

  const companies = [
    {
      name: "테크이노베이션",
      position: "시니어 프론트엔드 개발자",
      period: "2022.03 - 2024.01",
      description: "대규모 웹 애플리케이션 개발 및 팀 리딩 경험",
      logo: "httpshttps://readdy.ai/api/search-image?query=modern%20tech%20company%20logo%20design%2C%20innovative%20technology%20symbol%2C%20pastel%20blue%20and%20purple%20gradient%2C%20clean%20minimalist%20corporate%20identity%2C%20professional%20business%20logo%2C%20white%20background&width=100&height=100&seq=company1&orientation=squarish"
    },
    {
      name: "디지털솔루션즈",
      position: "풀스택 개발자",
      period: "2020.01 - 2022.02",
      description: "프론트엔드와 백엔드를 모두 담당하며 다양한 프로젝트 경험",
      logo: "https://readdy.ai/api/search-image?query=digital%20solutions%20company%20logo%2C%20modern%20software%20development%20symbol%2C%20pastel%20pink%20and%20blue%20colors%2C%20professional%20corporate%20branding%2C%20minimalist%20design%2C%20white%20background&width=100&height=100&seq=company2&orientation=squarish"
    },
    {
      name: "스타트업코리아",
      position: "주니어 개발자",
      period: "2018.06 - 2019.12",
      description: "스타트업 환경에서 빠른 개발과 문제 해결 능력 향상",
      logo: "https://readdy.ai/api/search-image?query=startup%20company%20logo%20design%2C%20creative%20innovation%20symbol%2C%20pastel%20purple%20and%20blue%20gradient%2C%20modern%20business%20identity%2C%20clean%20corporate%20logo%2C%20white%20background&width=100&height=100&seq=company3&orientation=squarish"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleProjectDetail = () => {
    navigate(`/project/${projects[currentProject].id}`);
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in-up">함께 일하고 싶으시다면</h2>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>새로운 도전과 기회를 기다리고 있습니다</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="mailto:developer@example.com" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 hover:scale-110 transform transition-all duration-300 cursor-pointer animate-slide-in-up" style={{animationDelay: '0.4s'}}>
              <i className="ri-mail-line text-xl"></i>
              <span>developer@example.com</span>
            </a>
            <a href="https://github.com" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 hover:scale-110 transform transition-all duration-300 cursor-pointer animate-slide-in-up" style={{animationDelay: '0.6s'}}>
              <i className="ri-github-line text-xl"></i>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 hover:scale-110 transform transition-all duration-300 cursor-pointer animate-slide-in-up" style={{animationDelay: '0.8s'}}>
              <i className="ri-linkedin-line text-xl"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
