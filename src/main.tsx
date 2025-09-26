import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './lib/queryClient'

// 🐕 귀여운 강아지 ASCII 아트
console.log(`
    / \\__         / \\__
   (    @\\___     @    \\___
    /         O   \\     O   \\
   /   (_____/    /   (_____/
  /_____/   U    /_____/   U

🐕 박해빈의 포트폴리오에 오신 것을 환영합니다! 🐕
`)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
