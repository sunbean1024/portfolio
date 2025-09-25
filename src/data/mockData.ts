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
  tech: string[];
  period: string;
  imageUrl: string;
}

export const companies: Company[] = [
  {
    name: "테크이노베이션",
    position: "시니어 프론트엔드 개발자",
    period: "2022.03 - 2024.01",
    description: "대규모 웹 애플리케이션 개발 및 팀 리딩 경험",
    logo: "https://readdy.ai/api/search-image?query=modern%20tech%20company%20logo%20design%2C%20innovative%20technology%20symbol%2C%20pastel%20blue%20and%20purple%20gradient%2C%20clean%20minimalist%20corporate%20identity%2C%20professional%20business%20logo%2C%20white%20background&width=100&height=100&seq=company1&orientation=squarish"
  },
  {
    name: "디지털솔루션즈",
    position: "풀스택 개발자",
    period: "2020.01 - 2022.02",
    description: "프론트엔드와 백엔드를 모두 담당하며 다양한 프로젝트 경험",
    logo: "https://readdy.ai/api/search-image?query=digital%20solutions%20company%20logo%2C%20modern%20software%20development%20symbol%2C%20pastel%20pink%20and%20blue%20colors%2C%20professional%20corporate%20branding%2C%20minimalist%20design%2C%20white%20background&width=100&height=100&seq=company2&orientation=squarish"
  },
];

export const projects: Project[] = [
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
