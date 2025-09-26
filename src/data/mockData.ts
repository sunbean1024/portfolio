import butterLogo from '@/assets/images/logos/butter-logo.png';
import jiranLogo from '@/assets/images/logos/jiransoft-logo.png';
import lgu1 from '@/assets/images/projects/lgu1.png';
import lgu2 from '@/assets/images/projects/lgu2.png';
import xkeeper1 from '@/assets/images/projects/xkeeper1.png';
import xkeeper2 from '@/assets/images/projects/xkeeper2.png';
import gosajang2 from '@/assets/images/projects/gosajang2.png';
import gosajang1 from '@/assets/images/projects/gosajang1.png';


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
    description: "대규모 멤버십 플랫폼, 브라우저, 실시간 감독 시스템, 온라인 시험 플랫폼 등 아키텍처 설계 및 React/Vue 프론트엔드 개발을 담당했습니다.",
    logo: butterLogo
  },
  {
    name: "지란지교소프트",
    position: "프론트엔드 개발자 | 사원",
    period: "2018.12 - 2022.07",
    description: "React/TypeScript 도입, Nuxt 리팩토링과 결제 시스템 구현, 실시간 기능 개발 및 CS팀과의 협업을 통한 사용자 경험 개선을 담당했습니다.",
    logo: jiranLogo
  },
];

export const projects: Project[] = [
  {
    "id": 1,
    "title": "LG유플러스 멤버십 통합 서비스",
    "description": "LG유플러스 멤버십 앱 기능을 유플닷컴으로 내재화한 앱 내 웹뷰 기반 통합 서비스 입니다.",
    "detailedDescription": "VIP콕, 멤버십 사용처, 유플투쁠 이벤트 등 핵심 기능들을 웹뷰로 통합하여 사용자 경험을 일원화했습니다. React Suspense와 TanStack Query를 활용한 상태 관리 최적화, 무한스크롤 페이지네이션 구현, 그리고 멤버십 차등 정책에 따른 복잡한 사용자 상태 관리까지 VIP콕 프론트엔드를 담당했습니다.",
    "tech": ["Next.js", "React", "TypeScript", "Zustand", "SCSS", "Storybook"],
    "period": "2024.12 - 진행중",
    "role": "Frontend Developer",
    "challenges": [
        "vue2로 되어있던 페이지를 react로 리팩토링",
        "iOS WebView 백화 현상 해결 (position: sticky GPU 컴포지팅 레이어 이슈)",
        "멤버십 차등 정책에 따른 복잡한 사용자 상태 관리",
    ],
    "contributions": [
      "VIP콕 서비스 메인/상세 페이지 개발",
      "멤버십 등급에 따른 차등 정책 분기처리 로직 구현 (훅으로 사용자 상태 관리)",
      "영화예매, 충전하기, 선물하기 등 다양한 혜택 유형별 컴포넌트 분리 설계",
      "유플투쁠 이벤트 시스템 개발 및 운영 개선"
    ],
    "images": [lgu2, lgu1],
    "githubUrl": "",
    "liveUrl": "https://apps.apple.com/kr/app/%EB%8B%B9%EC%8B%A0%EC%9D%98-u/id945578864",
    "imageUrl": lgu2,
    "reflection": [
        "이 프로젝트를 통해 가장 큰 깨달음은 '문제의 본질을 파악하는 것의 중요성'이었습니다. iOS WebView 백화 현상을 해결할 때, 처음에는 데이터 로딩 문제로 오해하고 글로벌 로딩 컴포넌트를 제거하고 React Suspense를 적용하는 등 여러 시행착오를 겪었습니다. 하지만 결국 근본 원인을 찾아내고, position: sticky 요소의 GPU 컴포지팅 레이어 생성 과정에서 iOS WebKit의 paint invalidation 실패가 원인임을 파악할 수 있었습니다.",
        "또한 '단순한 해결책이 때로는 최고의 해결책'이라는 것을 배웠습니다. 복잡한 CSS 변경이나 DOM 조작 대신 window.scrollTo()라는 단순한 API로 문제를 해결할 수 있었던 것처럼, 과도한 엔지니어링보다는 문제의 핵심을 정확히 파악하는 것이 중요하다는 것을 깨달았습니다. 이는 앞으로 어떤 기술적 도전을 만나더라도 근본 원인을 찾아내는 사고방식을 기르는 데 큰 도움이 되었습니다.",
        "기술적으로는 React/Next.js 생태계의 깊이를 이해하게 되었고, 특히 Suspense와 Error Boundary를 활용한 에러 처리, TanStack Query의 캐싱 전략, 그리고 WebView 환경의 특수성을 고려한 개발 방법론을 익힐 수 있었습니다.",
        "팀 협업 측면에서는 복잡한 이슈를 체계적으로 분석하고 해결하는 과정에서 동료들과의 소통과 지식 공유의 중요성을 다시 한번 느꼈습니다. 특히 iOS WebView 이슈 해결 과정에서 팀원들과 함께 문제를 분석하고, 다양한 접근 방법을 시도해보며 최종 해결책을 찾아가는 과정에서 팀워크의 가치를 깊이 체감했습니다. 앞으로도 이런 협업을 통해 더 나은 솔루션을 만들어갈 수 있을 것 같습니다."
    ]
  },
  {
    "id": 2,
    "title": "고사장 브라우저 (시험 감독용 보안 브라우저)",
    "description": "시험 부정행위 방지를 위한 보안 브라우저로, 운영체제 레벨 보안 모듈을 통합하여 키보드/마우스 입력 차단, 화면 캡처 방지, 클립보드 제어 등 다중 보안 계층을 구현한 Electron 기반 데스크톱 애플리케이션입니다.",
    "detailedDescription": "이 프로젝트는 온라인 시험 환경에서 응시자의 부정행위를 방지하기 위한 보안 브라우저 개발입니다.",
    "tech": ["Electron", "React", "TypeScript","Node.js", "Express.js"],
    "period": "2024.03 ~ 2025.08",
    "role": "Frontend Developer",
    "challenges": [
      "일렉트론 내부에서 웹사이트를 띄워 크롬의 일부분 기능을 구현",
    ],
    "contributions": [
      "Electron 기반 보안 모듈 시스템 개발 (키보드/마우스 입력 차단, 화면 캡처 방지 등)",
      "WebContents → WebView: UI 가려짐 문제 해결을 위한 아키텍처 개선",
      "실시간 상태 모니터링: 웹캠, 화면공유, 스마트폰 연결 상태 실시간 표시"
    ],
    "images": [gosajang2],
    "githubUrl": "",
    "liveUrl": "https://gosajang.io/",
    "imageUrl": gosajang2,
    "reflection": [
      "기술적으로는 Electron 생태계의 깊이를 이해하게 되었고, 특히 네이티브 모듈 통합, IPC 통신, 크로스 플랫폼 개발의 복잡성을 경험했습니다. Rust와 TypeScript를 함께 사용하면서 각 언어의 장점을 살린 하이브리드 개발 방법론을 익힐 수 있었고, Inspector 패턴을 활용한 확장 가능한 보안 모듈 아키텍처 설계 능력을 기를 수 있었습니다.",
      "WebContents의 한계를 극복하기 위해 WebView로 변환하면서, Electron의 다양한 렌더링 방식을 이해하게 되었습니다. WebContents는 메인 프로세스에서 직접 제어되어 UI 레이어 분리가 불가능했지만, WebView는 독립적인 렌더링 컨텍스트를 제공하여 브라우저 UI와 웹 콘텐츠를 완전히 분리할 수 있었습니다. 특히 WebView의 이벤트 처리(did-finish-load, will-navigate)와 조건부 렌더링을 통한 메모리 최적화 방법을 익히면서, Electron의 IPC 통신 시스템과 멀티 탭 환경에서의 성능 최적화 기법을 습득할 수 있었습니다."
    ]
  },
  {
    "id": 3,
    "title": "고사장 프록터 웹 (실시간 감독 플랫폼)",
    "description": "온라인 시험 환경에서 감독관이 응시자를 실시간으로 모니터링할 수 있는 웹 기반 감독 시스템입니다. WebRTC 기반 멀티 스트림 관리, Socket.IO 실시간 통신, 동적 그리드 레이아웃을 통해 PC와 모바일 기기에서 동시에 전송되는 비디오/오디오 스트림을 화면에 보여주며, 실시간 채팅과 상태 동기화를 제공합니다.",
    "detailedDescription": "감독관이 응시자를 모니터링하는 실시간 감시 서비스 입니다",
    "tech": ["Vue 3", "TypeScript", "Pinia", "Socket.IO", "WebRTC", "PrimeVue", "SCSS", "Vite"],
    "period": "2024.03 ~ 2025.08",
    "role": "Frontend Developer",
    "challenges": [
      "WebRTC 멀티 스트림 동기화 및 DOM 참조 문제",
      "폴링 방식의 서버 부하 증가 및 실시간성 부족",
      "동적 그리드 레이아웃에서 비동기 처리로 인한 UI 업데이트 지연",
    ],
    "contributions": [
      "WebRTC 기반 멀티 스트림 실시간 감독 시스템 개발 (PC/모바일 동시 지원)",
      "폴링에서 Socket.IO 기반 실시간 통신으로 전환하여 네트워크 트래픽 감소",
      "vue3-grid-layout-next를 활용한 동적 화면 배치 및 실시간 레이아웃 조정 구현",
      "실시간 채팅, 알림, 상태 변경을 통한 감독 효율성 향상 및 사용자 경험 개선",
    ],
    "images": [gosajang2],
    "githubUrl": "",
    "liveUrl": "https://gosajang.io/",
    "imageUrl": gosajang2,
    "reflection": [
      "프로젝트에서 구현에서 문제를 겪었던 일은 '실시간 미디어 스트림 처리의 복잡성'이었습니다. WebRTC 멀티 스트림 관리에서 스트림 동기화와 DOM 참조 문제를 해결할 때, 단순히 코드 로직만 수정하는 것이 아니라 `nextTick`을 활용한 비동기 DOM 업데이트와 동적 ref 할당까지 전체적인 아키텍처를 이해해야 해결할 수 있다는 것을 배웠습니다. 특히 `createLayout` 함수에서 `videoRefs.value[newItemIndex]`를 참조할 때 발생하는 타이밍 이슈를 해결하기 위해 `await nextTick()`을 사용하여 DOM 업데이트를 보장하는 과정에서, 실시간 시스템에서는 예측하기 어려운 타이밍 이슈들이 발생하므로 전체적인 흐름을 파악하는 것이 중요하다는 것을 깨달았습니다.",
      "또한 '폴링과 소켓 통신의 장단점 분석'을 통해 최적의 통신 방식을 선택하는 과정에서 시스템 아키텍처 설계의 중요성을 배웠습니다. 기존 폴링 방식에서 5초마다 API를 호출하던 것을 Socket.IO 기반 실시간 통신으로 전환하여 네트워크 트래픽을 감소시키고 응답 속도를 개선할 수 있었습니다. 이 과정에서 기술적 선택이 비즈니스 성과에 미치는 영향을 직접 경험할 수 있었습니다.",
    ]
  },
  {
    "id": 4,
    "title": "고사장 응시자 웹",
    "description": "관리자 설정 기반 온라인 시험 플랫폼으로, 실시간 감시 시스템과 다양한 문항 유형을 지원하는 응시자 웹 시스템입니다.",
    "detailedDescription": "관리자가 시험 설정, 문항 구성, 시간 제한 등을 관리자 페이지에서 설정하면, 응시자들이 해당 설정에 맞춰 온라인으로 시험을 응시할 수 있는 플랫폼입니다. 실시간 감시 시스템을 통해 부정행위를 방지하고, 8가지 문항 유형을 지원하여 다양한 시험 형태를 구현할 수 있습니다.",
    "tech": ["Vue 3", "TypeScript", "Pinia", "WebRTC", "Socket.io", "SCSS"],
    "period": "2024.03 ~ 2025.08",
    "role": "Frontend Developer (유지보수 및 기능 개선)",
    "challenges": [
        "설정에 따라 커스텀 할 수 있는 응시자 페이지",
        "글로벌 시험 환경을 위한 타임존 처리 및 크로스 플랫폼 호환성"
    ],
    "contributions": [
        "실시간 타이머 동기화 시스템 구축으로 서버-클라이언트 시간 불일치 문제 해결",
        "실시간 디바이스 상태 모니터링 및 로깅 시스템 구축",
        "WebRTC + Socket.io 기반 실시간 감시 기능 강화",
        "글로벌 시험 환경 대응을 위한 타임존 국제화 처리",
        "QR코드 기반 모바일-데스크톱 연동 기능 구축"
    ],
    "images": [],
    "githubUrl": "",
    "liveUrl": "https://gosajang.io/",
    "imageUrl": "",
    "reflection": [
      "실시간 데이터 처리와 다양한 디바이스 환경 대응이 중요한 시스템에서, WebRTC와 Socket.io의 활용도가 높다는 것을 실감했습니다. 특히 Socket.io를 통한 실시간 채팅 시스템에서 메시지가 연속적으로 들어오는 상황에서 발생하는 성능 문제를 해결하면서, 이벤트 기반 비동기 처리의 중요성을 깊이 이해했습니다.",
      "다양한 타임존을 고려한 국제화 처리에서, 글로벌 서비스를 제공할 때 고려해야 할 점을 배웠습니다. new Date() 대신 userDate 기반의 일관된 시간 처리 시스템을 구축하면서, 서버의 UTC 시간과 클라이언트의 로컬 시간 간의 변환 로직을 구현하는 경험을 했습니다."
    ]
  },
  {
    "id": 5,
    "title": "고사장 관리자 웹",
    "description": "기업 관리자가 시험과 응시자 환경을 관리하는 서비스로, 실시간 감독 영상 모니터링과 멀티 비디오 동기화 플레이어를 통해 시험이 끝나도 응시자의 기록을 볼 수 있습니다.",
    "detailedDescription": "기업 관리자가 시험과 응시자 환경을 관리하며 시험을 만들 수 있고, 시험이 끝난 후에는 응시자의 기록을 확인할 수 있는 사이트 입니다.",
    "tech": ["Vue 3", "TypeScript", "SCSS", "Vite", "PrimeVue"],
    "period": "2024.03 ~ 2025.08",
    "role": "Frontend Developer",
    "challenges": [
        "3개 독립 비디오 스트림의 실시간 동기화 구현",
        "서로 다른 시작/종료 시간을 가진 비디오들의 타임라인 통합",
        "복잡한 시간축 계산 로직으로 정확한 재생 위치 제어",
        "시험 생성에서 감시 화면을 다양하게 커스텀(웹, 모바일, 화면공유)하고 부정행위 방지도 원하는대로 설정 할 수 있음"
    ],
    "contributions": [
      "멀티 비디오 동기화 플레이어 개발: PC화면, 정면감독, 주변감독 3개 카메라의 실시간 동기화 재생 기능 구현",
      "복잡한 시간축 관리 시스템: 서로 다른 시작/종료 시간을 가진 비디오들을 하나의 타임라인으로 통합하여 관리",
      "실시간 이벤트 마킹: 감독 메모, 채팅 등 이벤트를 타임라인에 시각적으로 표시하고 해당 시점으로 즉시 이동 가능"
    ],
    "images": [gosajang1],
    "githubUrl": "",
    "liveUrl": "https://gosajang.io/",
    "imageUrl": gosajang1,
    "reflection": [
        "PC화면, 정면감독, 주변감독 3개 카메라의 영상을 실시간으로 동기화하여 재생하는 멀티 비디오 플레이어를 개발했습니다. 서로 다른 시작/종료 시간을 가진 비디오들을 하나의 타임라인으로 통합하기 위해, 각 비디오의 절대 시작 시간을 기준으로 상대적 재생 위치를 계산하는 Unix 타임스탬프 기반 시간축 알고리즘을 구현했습니다. 이 알고리즘은 전체 재생 시간에서 각 비디오의 시작 시점을 빼고 기준 시간을 더하여 정확한 재생 위치를 계산하며, 현재 재생 시점에 따라 적절한 비디오만 화면에 표시하는 조건부 렌더링 시스템과 실시간 볼륨 제어 기능을 함께 개발했습니다."
    ]
  },
  {
    "id": 6,
    "title": "통합운영시스템",
    "description": "지란지교소프트의 오피스웨어 및 관련 제품들을 관리하는 사이트 입니다.",
    "detailedDescription": "이 프로젝트는 회사 내부에서 사용하는 통합 관리 시스템으로, 기획부터 디자인, 화면 구성까지 팀원들과 협업하여 개발했습니다. next-auth 기반 인증, Ant Design UI 구성, axios를 통한 서버 통신 등을 구현했습니다. 팀 내 역할 변화로 인해 서버와 프론트엔드 구분이 모호해진 상황에서 서버 환경 세팅 및 로컬 로그 분석을 통해 문제를 해결하며 서버 이해도를 넓힐 수 있었습니다.",
    "tech": ["React", "TypeScript", "Ant Design", "Axios", "Git", "Jira"],
    "period": "2022.04 ~ 2022.07",
    "role": "Frontend Developer",
    "challenges": [
      "React와 TypeScript를 처음 도입하며 프로젝트 초기 세팅 및 적용",
      "서버/프론트 구분 없는 팀 환경에서 유연하게 대응",
      "서버 로그 기반 디버깅 및 문제 해결"
    ],
    "contributions": [
      "프론트엔드 주요 기능 개발 (로그인/로그아웃, UI 구성)",
      "서버 통신 및 로컬 환경 로그 분석을 통한 문제 해결",
      "팀 내 의사소통 및 협업 과정에서 의견 수용 능력 향상"
    ],
    "images": [],
    "githubUrl": "",
    "liveUrl": "",
    "imageUrl": "",
    "reflection": [
      "처음으로 react와 typescript를 사용해 만든 프로젝트 입니다. 회사 내에서 사용하는 사이트를 만드는 것이어서 기획부터 디자인, 화면 구성까지 팀원들과 같이 상의해 개발하였습니다. 이러한 과정을 통해서 팀원들과 의사소통을 더 많이 할 수 있었고 의견을 나누고 수용하는 과정에 대해서 배울 수 있었습니다.",
      "팀의 변경으로 인하여 팀에서 서버, 프론트엔드의 구분이 없어야 한다는 팀 리더의 생각에 따라 서버 환경을 세팅하고, 통신을 하면서 필요한 로그를 찍어보며 로컬에서 수정할 수 있는 부분은 수정 후 유연하게 오류에 대응을 했습니다. PHP를 사용해 서버 개발에 참여한 것은 아니지만 위의 경험을 통하여 코드를 폭넓게 볼 수 있게 되면서 서버에 대한 이해도가 높아졌습니다."
    ]
  },
  {
    "id": 7,
    "title": "Xkeeper 홈페이지 리팩토링",
    "description": "엑스키퍼 제품 홈페이지를 Nuxt 기반으로 리팩토링하여 기능 소개, 자녀 사용 제어 및 보고서 제공, 구매 기능 등을 포함한 웹사이트를 개발했습니다.",
    "detailedDescription": "이 프로젝트는 기존에 존재하던 Xkeeper 홈페이지를 Nuxt 기반으로 리팩토링한 작업입니다. 주요 기능으로는 자녀의 PC/모바일 사용 시간 제어, 사용 기록 리포트 제공, 위치 서비스(구글맵 & 카카오맵 API), 실시간 데스크탑 화면 캡쳐(socket.io), 이니시스 결제, 구글 리캡챠 보안 강화 등이 있습니다.",
    "tech": ["Nuxt", "Sass", "JavaScript", "Axios", "Lodash", "Git", "Sonar", "Sentry"],
    "period": "2020.01 ~ 2022.04",
    "role": "Frontend Developer",
    "challenges": [
      "기존 홈페이지를 Nuxt 기반으로 리팩토링",
      "구글맵과 카카오 지도 API를 조합해 위치 서비스 구현",
      "socket.io를 활용한 실시간 데스크탑 화면 캡쳐 기능",
      "이니시스 결제를 통한 구매 기능 구현",
      "구글 리캡챠 기반 로그인 보안 강화",
      "CS팀과 협업을 통해 고객 피드백을 직접 반영"
    ],
    "contributions": [
      "홈페이지 프론트엔드 전체 리팩토링 (90% 이상 기여)",
      "구글맵 API와 카카오 지도 API를 결합하여 직관적인 위치 서비스 제공",
      "socket.io 기반 실시간 자녀 PC 화면 캡쳐 기능 개발",
      "이니시스 결제 프로세스 구현으로 상용 결제 경험 확보",
      "구글 리캡챠 적용으로 보안 강화",
      "사용자 경험 개선을 위해 CS팀과 협업하여 고객 피드백 반영"
    ],
    "images": [xkeeper1, xkeeper2],
    "githubUrl": "",
    "liveUrl": "https://xkeeper.com/",
    "imageUrl": xkeeper1,
    "reflection": [
      "처음으로 이니시스를 이용해 구매 개발을 하였습니다. 개발을 시작하기 전에 결제는 어떤 식으로 구현하는 걸까 라는 의문을 많이 가지고 있었는데, 이니시스를 이용해 구매를 개발하면서 이니시스를 사용해 결제가 진행되는 과정을 할게 되어서 궁금한 점이 해결 될 수 있었고, 엑스키퍼 전에는 다른 회사를 위한 제품이나 백오피스 개발만 해서 회사 외의 사용자들과는 거리감이 있었는데 이번 개발을 통해서 내가 개발하는 홈페이지가 사용자들에게 한 걸음 더 가까이 다가가는 기분이 들었습니다.",
      "홈페이지에서 오류가 나면 고객들이 고객센터로 오류가 있다고 문의가 들어오기 때문에 홈페이지를 리팩토링할 때 cs 업무를 하는 직원들과 이야기를 나누고 시간을 나눌 시간이 많았습니다. 이야기를 나누면서 고객들의 목소리를 옆에서 들을 수 있어서 뜻깊은 경험이 되었습니다."
    ]
  }
];
