import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  showBackButton?: boolean;
  backButtonText?: string;
}

export default function Header({ showBackButton = false, backButtonText = "돌아가기" }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="font-bold text-2xl text-purple-600 hover:scale-105 transform transition-all duration-300 cursor-pointer"
          >
            포트폴리오
          </button>
          
          {showBackButton ? (
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 hover:scale-105 transform transition-all duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
              <span>{backButtonText}</span>
            </button>
          ) : (
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-purple-400 transition-all duration-300 hover:scale-105 cursor-pointer">소개</a>
              <a href="#experience" className="text-gray-700 hover:text-purple-400 transition-all duration-300 hover:scale-105 cursor-pointer">경력</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-400 transition-all duration-300 hover:scale-105 cursor-pointer">프로젝트</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-400 transition-all duration-300 hover:scale-105 cursor-pointer">연락처</a>
            </div>
          )}
          
          <button className="md:hidden hover:rotate-180 transition-transform duration-300">
            <i className="ri-menu-line text-2xl text-gray-700"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
