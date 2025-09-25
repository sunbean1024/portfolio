import type { Company } from '@/data/mockData';

interface ExperienceSectionProps {
  companies: Company[];
}

export default function ExperienceSection({ companies }: ExperienceSectionProps) {
  return (
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
                    className="w-full h-full object-contain rounded-xl shadow-sm border border-gray-100"
                    onError={(e) => {
                      // 이미지 로드 실패 시 기본 아이콘 표시
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg hidden shadow-sm border border-gray-100">
                    {company.name.charAt(0)}
                  </div>
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
  );
}
