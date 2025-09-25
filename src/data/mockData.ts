import butterLogo from '@/assets/images/logos/butter-logo.png';
import zeranLogo from '@/assets/images/logos/jiransoft-logo.png';

export interface Company {
  name: string;
  position: string;
  period: string;
  description: string;
  logo: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  tech: string[];
  period: string;
  imageUrl: string;
  role: string;
  teamSize: string;
  challenges: string[];
  achievements: string[];
  images: string[];
  githubUrl: string;
  liveUrl: string;
}

export const companies: Company[] = [
  {
    name: "버터",
    position: "프론트엔드 개발자 | 대리",
    period: "2024.03 - 재직중",
    description: "대규모 웹 애플리케이션 개발 및 팀 리딩 경험",
    logo: butterLogo
  },
  {
    name: "지란지교소프트",
    position: "프론트엔드 개발자 | 사원",
    period: "2018.12 - 2022.07",
    description: "프론트엔드와 백엔드를 모두 담당하며 다양한 프로젝트 경험",
    logo: zeranLogo
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce 플랫폼 개발",
    description: "React와 Node.js를 활용한 대규모 쇼핑몰 시스템 구축. 결제 시스템, 재고 관리, 사용자 관리 등 전반적인 기능 개발을 담당했습니다.",
    detailedDescription: "이 프로젝트는 월 1만명 이상의 사용자가 이용하는 대규모 E-commerce 플랫폼입니다. 프론트엔드부터 백엔드, 데이터베이스 설계까지 전체 아키텍처를 담당했으며, 특히 결제 시스템의 안정성과 보안에 중점을 두어 개발했습니다. Stripe API를 연동하여 안전한 결제 환경을 구축했고, Redis를 활용한 세션 관리와 캐싱으로 성능을 최적화했습니다.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redis", "AWS"],
    period: "2023.03 - 2023.12",
    role: "Lead Frontend Developer",
    teamSize: "5명",
    challenges: [
      "대용량 트래픽 처리를 위한 성능 최적화",
      "실시간 재고 관리 시스템 구현",
      "다양한 결제 방식 통합",
      "모바일 반응형 디자인 구현"
    ],
    achievements: [
      "페이지 로딩 속도 40% 개선",
      "결제 성공률 98% 달성",
      "모바일 사용자 증가 200%",
      "사용자 만족도 4.8/5.0 달성"
    ],
    images: [
      "https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20homepage%20with%20product%20grid%2C%20shopping%20cart%20interface%2C%20clean%20white%20background%2C%20purple%20and%20blue%20accent%20colors%2C%20professional%20UI%20design%2C%20desktop%20view&width=800&height=500&seq=detail1-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=e-commerce%20product%20detail%20page%20with%20large%20product%20images%2C%20reviews%20section%2C%20add%20to%20cart%20button%2C%20modern%20UI%20design%2C%20white%20background%20with%20soft%20shadows&width=800&height=500&seq=detail1-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=shopping%20cart%20checkout%20process%20interface%2C%20payment%20form%2C%20order%20summary%2C%20secure%20payment%20design%2C%20clean%20modern%20layout%2C%20professional%20e-commerce%20design&width=800&height=500&seq=detail1-3&orientation=landscape"
    ],
    githubUrl: "https://github.com/example/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.example.com",
    imageUrl: "https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20shopping%20cart%2C%20product%20listings%2C%20pastel%20blue%20and%20purple%20color%20scheme%2C%20professional%20UI%2FUX%20design%2C%20minimalist%20layout%2C%20white%20background%20with%20soft%20shadows&width=400&height=300&seq=project1&orientation=landscape"
  },
  {
    id: 2,
    title: "모바일 앱 개발",
    description: "React Native를 사용한 크로스 플랫폼 모바일 애플리케이션 개발. 실시간 채팅, 위치 기반 서비스, 푸시 알림 등을 구현했습니다.",
    detailedDescription: "소셜 네트워킹 기능이 포함된 위치 기반 모바일 애플리케이션입니다. 사용자들이 실시간으로 소통하고, 주변 친구들을 찾을 수 있는 기능을 제공합니다. Firebase를 활용한 실시간 데이터베이스와 Socket.io를 통한 실시간 채팅 시스템을 구현했으며, 푸시 알림으로 사용자 참여도를 높였습니다.",
    tech: ["React Native", "Firebase", "Redux", "TypeScript", "Socket.io", "Google Maps API"],
    period: "2022.08 - 2023.02",
    role: "Mobile App Developer",
    teamSize: "3명",
    challenges: [
      "iOS와 Android 플랫폼 동시 지원",
      "실시간 위치 추적 최적화",
      "배터리 효율성 개선",
      "오프라인 모드 구현"
    ],
    achievements: [
      "앱스토어 평점 4.6/5.0 달성",
      "다운로드 수 10만+ 돌파",
      "일일 활성 사용자 5,000명",
      "배터리 사용량 30% 최적화"
    ],
    images: [
      "https://readdy.ai/api/search-image?query=mobile%20app%20interface%20with%20chat%20messages%2C%20location%20map%2C%20user%20profiles%2C%20modern%20UI%20design%2C%20smartphone%20mockup%2C%20clean%20interface%20design&width=800&height=500&seq=detail2-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=mobile%20app%20map%20interface%20showing%20user%20locations%2C%20GPS%20tracking%2C%20social%20features%2C%20modern%20mobile%20UI%2C%20location-based%20app%20design&width=800&height=500&seq=detail2-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=mobile%20app%20notification%20screen%2C%20push%20notifications%2C%20user%20engagement%20features%2C%20modern%20app%20interface%2C%20clean%20mobile%20design&width=800&height=500&seq=detail2-3&orientation=landscape"
    ],
    githubUrl: "https://github.com/example/social-location-app",
    liveUrl: "https://apps.apple.com/app/social-location",
    imageUrl: "https://readdy.ai/api/search-image?query=mobile%20app%20interface%20mockup%20on%20smartphone%20screen%2C%20modern%20UI%20design%2C%20chat%20messages%2C%20location%20services%2C%20pastel%20pink%20and%20blue%20colors%2C%20clean%20minimalist%20design%2C%20white%20background%20with%20subtle%20gradients&width=400&height=300&seq=project2&orientation=landscape"
  },
  {
    id: 3,
    title: "데이터 시각화 대시보드",
    description: "D3.js와 React를 활용한 실시간 데이터 시각화 대시보드 구축. 복잡한 데이터를 직관적인 차트와 그래프로 표현했습니다.",
    detailedDescription: "기업의 비즈니스 인텔리전스를 위한 실시간 데이터 시각화 대시보드입니다. 다양한 데이터 소스에서 수집된 정보를 실시간으로 처리하고, 인터랙티브한 차트와 그래프로 표현하여 경영진의 의사결정을 지원합니다. 사용자 맞춤형 대시보드 구성과 데이터 드릴다운 기능을 제공합니다.",
    tech: ["React", "D3.js", "Python", "PostgreSQL", "Flask", "WebSocket", "Chart.js"],
    period: "2022.01 - 2022.07",
    role: "Full Stack Developer",
    teamSize: "4명",
    challenges: [
      "대용량 데이터 실시간 처리",
      "복잡한 차트 인터랙션 구현",
      "다양한 데이터 소스 통합",
      "반응형 대시보드 레이아웃"
    ],
    achievements: [
      "데이터 처리 속도 50% 향상",
      "사용자 맞춤 대시보드 100% 구현",
      "실시간 업데이트 지연시간 1초 이내",
      "클라이언트 만족도 95% 달성"
    ],
    images: [
      "https://readdy.ai/api/search-image?query=business%20intelligence%20dashboard%20with%20multiple%20charts%2C%20graphs%2C%20KPI%20widgets%2C%20modern%20analytics%20interface%2C%20clean%20white%20background%2C%20professional%20data%20visualization&width=800&height=500&seq=detail3-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=interactive%20data%20visualization%20with%20pie%20charts%2C%20bar%20graphs%2C%20line%20charts%2C%20modern%20dashboard%20UI%2C%20business%20analytics%2C%20professional%20design&width=800&height=500&seq=detail3-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=real-time%20data%20monitoring%20dashboard%2C%20live%20charts%2C%20analytics%20widgets%2C%20modern%20business%20interface%2C%20clean%20professional%20design&width=800&height=500&seq=detail3-3&orientation=landscape"
    ],
    githubUrl: "https://github.com/example/data-dashboard",
    liveUrl: "https://dashboard-demo.example.com",
    imageUrl: "https://readdy.ai/api/search-image?query=data%20visualization%20dashboard%20with%20beautiful%20charts%20and%20graphs%2C%20analytics%20interface%2C%20pastel%20purple%20and%20blue%20color%20palette%2C%20modern%20business%20dashboard%2C%20clean%20white%20background%2C%20professional%20data%20visualization&width=400&height=300&seq=project3&orientation=landscape"
  },
  {
    id: 4,
    title: "AI 챗봇 시스템",
    description: "자연어 처리를 활용한 고객 서비스 챗봇 개발. 머신러닝 모델을 통해 사용자 의도를 파악하고 적절한 응답을 제공합니다.",
    detailedDescription: "자연어 처리와 머신러닝을 활용한 지능형 고객 서비스 챗봇 시스템입니다. 사용자의 질문 의도를 정확히 파악하고, 문맥을 이해하여 개인화된 응답을 제공합니다. 지속적인 학습을 통해 응답 품질이 향상되며, 관리자 인터페이스를 통해 챗봇 성능을 모니터링할 수 있습니다.",
    tech: ["Python", "TensorFlow", "Flask", "MySQL", "NLP", "BERT", "Docker"],
    period: "2021.06 - 2021.12",
    role: "AI/ML Developer",
    teamSize: "6명",
    challenges: [
      "자연어 이해 정확도 향상",
      "다양한 언어 지원",
      "실시간 응답 성능 최적화",
      "챗봇 학습 데이터 관리"
    ],
    achievements: [
      "자연어 이해 정확도 92% 달성",
      "응답 시간 평균 2초 이내",
      "고객 만족도 88% 향상",
      "운영 비용 40% 절감"
    ],
    images: [
      "https://readdy.ai/api/search-image?query=AI%20chatbot%20interface%20with%20conversation%20bubbles%2C%20modern%20chat%20UI%2C%20artificial%20intelligence%20assistant%2C%20clean%20messaging%20design%2C%20professional%20customer%20service&width=800&height=500&seq=detail4-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=chatbot%20analytics%20dashboard%20showing%20conversation%20metrics%2C%20AI%20performance%20data%2C%20customer%20satisfaction%20scores%2C%20modern%20admin%20interface&width=800&height=500&seq=detail4-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=machine%20learning%20model%20training%20interface%2C%20NLP%20processing%20visualization%2C%20AI%20development%20tools%2C%20technical%20dashboard%20design&width=800&height=500&seq=detail4-3&orientation=landscape"
    ],
    githubUrl: "https://github.com/example/ai-chatbot",
    liveUrl: "https://chatbot-demo.example.com",
    imageUrl: "https://readdy.ai/api/search-image?query=AI%20chatbot%20interface%20with%20conversation%20bubbles%2C%20modern%20chat%20UI%20design%2C%20artificial%20intelligence%20assistant%2C%20pastel%20blue%20and%20pink%20colors%2C%20clean%20messaging%20interface%2C%20white%20background&width=400&height=300&seq=project4&orientation=landscape"
  },
  {
    id: 5,
    title: "블록체인 NFT 마켓플레이스",
    description: "Web3 기술을 활용한 NFT 거래 플랫폼 개발. 스마트 컨트랙트와 메타마스크 연동을 통한 안전한 디지털 자산 거래 시스템을 구축했습니다.",
    detailedDescription: "블록체인 기술을 기반으로 한 NFT(Non-Fungible Token) 마켓플레이스 플랫폼입니다. 아티스트들이 자신의 디지털 작품을 NFT로 민팅하고 판매할 수 있으며, 수집가들은 안전하게 디지털 자산을 구매하고 소유할 수 있습니다. 이더리움 블록체인과 IPFS를 활용하여 탈중앙화된 시스템을 구축했습니다.",
    tech: ["React", "Web3.js", "Solidity", "Ethereum", "IPFS", "MetaMask", "OpenSea API"],
    period: "2023.01 - 2023.06",
    role: "Blockchain Developer",
    teamSize: "4명",
    challenges: [
      "스마트 컨트랙트 보안 강화",
      "높은 가스비 최적화",
      "복잡한 Web3 UX 개선",
      "크로스체인 호환성 구현"
    ],
    achievements: [
      "누적 거래량 500 ETH 달성",
      "가스비 최적화로 30% 비용 절감",
      "일일 활성 사용자 2,000명",
      "스마트 컨트랙트 보안 감사 통과"
    ],
    images: [
      "https://readdy.ai/api/search-image?query=NFT%20marketplace%20interface%20with%20digital%20art%20gallery%2C%20blockchain%20technology%2C%20crypto%20wallet%20integration%2C%20modern%20web3%20design%2C%20pastel%20purple%20and%20blue%20colors%2C%20clean%20futuristic%20layout%2C%20white%20background&width=800&height=500&seq=detail5-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=NFT%20collection%20showcase%20with%20digital%20artwork%2C%20blockchain%20transaction%20interface%2C%20cryptocurrency%20payment%2C%20modern%20marketplace%20UI%2C%20clean%20web3%20design&width=800&height=500&seq=detail5-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=blockchain%20smart%20contract%20interface%2C%20ethereum%20wallet%20connection%2C%20NFT%20minting%20process%2C%20crypto%20trading%20platform%2C%20professional%20web3%20design&width=800&height=500&seq=detail5-3&orientation=landscape"
    ],
    githubUrl: "https://github.com/example/nft-marketplace",
    liveUrl: "https://nft-marketplace-demo.example.com",
    imageUrl: "https://readdy.ai/api/search-image?query=NFT%20marketplace%20interface%20with%20digital%20art%20gallery%2C%20blockchain%20technology%2C%20crypto%20wallet%20integration%2C%20modern%20web3%20design%2C%20pastel%20purple%20and%20blue%20colors%2C%20clean%20futuristic%20layout%2C%20white%20background&width=400&height=300&seq=project5&orientation=landscape"
  }
];
