import { companies, projects, type Company, type Project } from '@/data/mockData';

// Mock API 함수들
export const mockApi = {
  // 회사 데이터 가져오기
  getCompanies: async (): Promise<Company[]> => {
    // 실제 API처럼 비동기 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 100));
    return companies;
  },

  // 프로젝트 데이터 가져오기
  getProjects: async (): Promise<Project[]> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return projects;
  },

  // 특정 프로젝트 가져오기
  getProject: async (id: number): Promise<Project | null> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return projects.find(project => project.id === id) || null;
  },

  // 회사 데이터 업데이트
  updateCompany: async (id: number, data: Partial<Company>): Promise<Company | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    // 실제로는 서버에 업데이트 요청을 보냄
    console.log(`Company ${id} updated:`, data);
    return companies[0]; // 예시로 첫 번째 회사 반환
  },

  // 프로젝트 데이터 업데이트
  updateProject: async (id: number, data: Partial<Project>): Promise<Project | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    console.log(`Project ${id} updated:`, data);
    return projects.find(project => project.id === id) || null;
  },

  // 다른 프로젝트들 가져오기 (현재 프로젝트 제외)
  getOtherProjects: async (excludeId: number): Promise<Project[]> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return projects.filter(project => project.id !== excludeId);
  }
};

export default mockApi;
