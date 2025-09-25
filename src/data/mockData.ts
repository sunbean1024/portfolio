import butterLogo from '@/assets/images/logos/butter-logo.png';
import jiranLogo from '@/assets/images/logos/jiransoft-logo.png';

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
  contributions: string[];
  images: string[];
  githubUrl: string;
  liveUrl: string;
  reflection: string[];
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
    logo: jiranLogo
  },
];

export const projects: Project[] = [
  {
    "id": 1,
    "title": "LG유플러스 멤버십 통합 서비스",
    "description": "LG유플러스 멤버십 앱 기능을 유플닷컴으로 내재화한 앱 내 웹뷰 기반 통합 서비스로, 네이티브 앱 업데이트 없이도 실시간 기능 배포와 크로스 플랫폼 호환성을 확보한 하이브리드 아키텍처를 구현했습니다.",
    "detailedDescription": "이 프로젝트는 월 10만명 이상의 VIP 고객이 이용하는 대규모 멤버십 플랫폼입니다. VIP콕, 멤버십 사용처, 유플투쁠 이벤트 등 핵심 기능들을 웹뷰로 통합하여 사용자 경험을 일원화했습니다. 특히 iOS WebView 환경에서 발생하는 복잡한 렌더링 이슈를 해결하고, 대기열 시스템을 통해 동시 접속자 급증 시에도 안정적인 서비스를 제공합니다. React Suspense와 TanStack Query를 활용한 상태 관리 최적화, 무한스크롤 페이지네이션 구현, 그리고 VVIP/VIP 차등 정책에 따른 복잡한 사용자 상태 관리까지 전체 프론트엔드 아키텍처를 담당했습니다.",
    "tech": ["Next.js 14", "React 18", "TypeScript", "Zustand", "TanStack Query", "SCSS", "NX", "Playwright", "Storybook"],
    "period": "2024.03 - 2025.01",
    "role": "Frontend Developer",
    "teamSize": "4명",
    "challenges": [
        "iOS WebView 백화 현상 해결 (position: sticky GPU 컴포지팅 레이어 이슈)",
        "대기열 시스템 구현 및 무한로딩 현상 해결",
        "VVIP/VIP 차등 정책에 따른 복잡한 사용자 상태 관리",
        "동시 접속자 급증 시 서버 부하 및 사용자 대기 문제",
        "앱 업데이트 없이 실시간 기능 배포를 위한 웹뷰 최적화"
    ],
    "contributions": [
        "iOS WebView 렌더링 이슈 해결로 앱 업데이트 없이도 안정적 서비스 제공",
        "대기열 시스템 구현으로 동시 접속자 급증 시 서버 다운 방지",
        "VIP콕 서비스 개발로 VIP 고객 만족도 향상 및 혜택 이용률 증대",
        "무한스크롤 페이지네이션 최적화로 페이지 로딩 성능 30% 개선",
        "React Suspense 적용으로 서브 페이지 렌더링 단위 분리 및 사용자 경험 개선"
    ],
    "images": [],
    "githubUrl": "",
    "liveUrl": "",
    "imageUrl": "",
    "reflection": [
        "이 프로젝트를 통해 가장 큰 깨달음은 '문제의 본질을 파악하는 것의 중요성'이었습니다. iOS WebView 백화 현상을 해결할 때, 처음에는 데이터 로딩 문제로 오해하고 글로벌 로딩 컴포넌트를 제거하고 React Suspense를 적용하는 등 여러 시행착오를 겪었습니다. 하지만 결국 브라우저 렌더링 파이프라인 문제라는 근본 원인을 찾아내고, position: sticky 요소의 GPU 컴포지팅 레이어 생성 과정에서 iOS WebKit의 paint invalidation 실패가 원인임을 파악할 수 있었습니다.",
        "또한 '단순한 해결책이 때로는 최고의 해결책'이라는 것을 배웠습니다. 복잡한 CSS 변경이나 DOM 조작 대신 window.scrollTo()라는 단순한 API로 문제를 해결할 수 있었던 것처럼, 과도한 엔지니어링보다는 문제의 핵심을 정확히 파악하는 것이 중요하다는 것을 깨달았습니다. 이는 앞으로 어떤 기술적 도전을 만나더라도 근본 원인을 찾아내는 사고방식을 기르는 데 큰 도움이 되었습니다.",
        "기술적으로는 React/Next.js 생태계의 깊이를 이해하게 되었고, 특히 Suspense와 Error Boundary를 활용한 에러 처리, TanStack Query의 캐싱 전략, 그리고 WebView 환경의 특수성을 고려한 개발 방법론을 익힐 수 있었습니다. 대기열 시스템 구현 과정에서 useEffect 의존성 배열 관리의 중요성과, 무한스크롤에서 메모리 누수 방지를 위한 가비지 컬렉션 최적화 등 실무에서 바로 적용할 수 있는 구체적인 기술들을 습득했습니다.",
        "팀 협업 측면에서는 복잡한 이슈를 체계적으로 분석하고 해결하는 과정에서 동료들과의 소통과 지식 공유의 중요성을 다시 한번 느꼈습니다. 특히 iOS WebView 이슈 해결 과정에서 팀원들과 함께 문제를 분석하고, 다양한 접근 방법을 시도해보며 최종 해결책을 찾아가는 과정에서 팀워크의 가치를 깊이 체감했습니다. 앞으로도 이런 협업을 통해 더 나은 솔루션을 만들어갈 수 있을 것 같습니다."
    ]
  },
];
