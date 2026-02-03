import { useAppMutation } from '@/features/shared/hooks';

import { ProjectService } from '../services/apis';

const useCreateProject = () => {
  const mutaion = useAppMutation({
    mutationFn: ({ programId, formData }: { programId: string; formData: FormData }, headers) =>
      ProjectService.create(programId, formData, headers),
  });

  return mutaion;
};

export default useCreateProject;
