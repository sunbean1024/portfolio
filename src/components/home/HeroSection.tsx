import { useState, useEffect } from 'react';
import Chip from '@/components/common/Chip';
import resumePdf from '@/assets/documents/haebeen_ resume.pdf';

interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    setAnimationDelay(300);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = '박해빈_이력서.pdf';
    link.click();
  };

  return (
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
             보안성과 실시간성이 중요한 웹/데스크톱 환경에서 Vue와 React 기반의 UI 및 상태 관리, 그리고 글로벌 대응을 경험 했습니다. 웹 접근성 향상을 고민하며, 사용자가 편리하게 이용할 수 있는 제품을 만드는 것을 지향합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Chip variant="blue">React</Chip>
              <Chip variant="purple">Vue</Chip>
              <Chip variant="pink">Next.js</Chip>
              <Chip variant="indigo">TypeScript</Chip>
            </div>
            <div className="flex space-x-4 pt-4">
              <button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-8 py-3 rounded-full font-medium hover-shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer whitespace-nowrap animate-pulse"
              >
                이력서 다운로드
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
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 animate-fade-up">프론트엔드 개발자</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
