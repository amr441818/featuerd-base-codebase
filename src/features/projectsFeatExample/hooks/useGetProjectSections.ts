import { useAppQuery } from '@/features/shared/hooks';

import { ProjectService } from '../services/apis';
import { Section } from '../types/project';

const useGetProjectSections = (projectId: string) => {
  const { data, isLoading } = useAppQuery<{ sections: Section[] }>({
    queryKey: ['project_sections', projectId],
    queryFn: (headers) => ProjectService.getSections(projectId, headers),
    enabled: !!projectId,
  });

  return {
    isLoading,
    sections: data?.data?.sections ?? [],
  };
};

export default useGetProjectSections;
