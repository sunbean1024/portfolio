import { useQuery } from '@tanstack/react-query';
import mockApi from '@/api/mockApi';
import type { Company, Project } from '@/data/mockData';

// Query Keys
export const queryKeys = {
  companies: ['companies'] as const,
  projects: ['projects'] as const,
  project: (id: number) => ['project', id] as const,
};

// Companies Hook
export const useCompanies = () => {
  return useQuery({
    queryKey: queryKeys.companies,
    queryFn: mockApi.getCompanies,
    staleTime: 1000 * 60 * 5, // 5분
  });
};

// Projects Hook
export const useProjects = () => {
  return useQuery({
    queryKey: queryKeys.projects,
    queryFn: mockApi.getProjects,
    staleTime: 1000 * 60 * 5, // 5분
  });
};

// Single Project Hook
export const useProject = (id: number) => {
  return useQuery({
    queryKey: queryKeys.project(id),
    queryFn: () => mockApi.getProject(id),
    enabled: !!id, // id가 있을 때만 실행
    staleTime: 1000 * 60 * 5, // 5분
  });
};

// Combined Hook for Home Page
export const useHomeData = () => {
  const companiesQuery = useCompanies();
  const projectsQuery = useProjects();

  return {
    companies: companiesQuery.data || [],
    projects: projectsQuery.data || [],
    isLoading: companiesQuery.isLoading || projectsQuery.isLoading,
    isError: companiesQuery.isError || projectsQuery.isError,
    error: companiesQuery.error || projectsQuery.error,
  };
};
