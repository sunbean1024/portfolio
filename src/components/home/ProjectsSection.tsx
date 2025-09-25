import Chip from '@/components/common/Chip';
import type { Project } from '@/data/mockData';

interface ProjectsSectionProps {
  projects: Project[];
  currentProject: number;
  onNextProject: () => void;
  onPrevProject: () => void;
  onSetCurrentProject: (index: number) => void;
  onProjectDetail: () => void;
}

export default function ProjectsSection({
  projects,
  currentProject,
  onNextProject,
  onPrevProject,
  onSetCurrentProject,
  onProjectDetail
}: ProjectsSectionProps) {
  return (
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
                        onClick={onPrevProject}
                        className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full hover:scale-110 transform transition-all duration-300 cursor-pointer"
                      >
                        <i className="ri-arrow-left-line text-gray-600"></i>
                      </button>
                      <button 
                        onClick={onNextProject}
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
                    onClick={onProjectDetail}
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
                onClick={() => onSetCurrentProject(index)}
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
  );
}
