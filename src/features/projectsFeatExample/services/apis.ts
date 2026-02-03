import apiServiceCall from '@/lib/apiServiceCall';

export const ProjectService = {
  getOptionsData: async (headers?: any) => {
    const data = await apiServiceCall({
      method: 'GET',
      url: `projects/form_data`,
      headers,
    });
    return data;
  },
  getProjectDetails: async (programId: string, projectId: string, headers?: any) => {
    const data = await apiServiceCall({
      method: 'GET',
      url: `programs/${programId}/projects/${projectId}`,
      headers,
    });
    return data;
  },
  getPerformanceDataByProgramId: async (programId: string, headers?: any) => {
    const data = await apiServiceCall({
      method: 'GET',
      url: `programs/${programId}/performance`,
      headers,
    });
    return data;
  },

  getFormData: async (headers?: any) => {
    const data = await apiServiceCall({
      method: 'GET',
      url: `projects/form_data`,
      headers,
    });
    return data;
  },

  getSections: async (projectId: string, headers?: any) => {
    const data = await apiServiceCall({
      method: 'GET',
      url: `projects/${projectId}/sections-list`,
      headers,
    });
    return data;
  },

  create: async (programId: string, formData: FormData, headers?: any) => {
    const { data } = await apiServiceCall({
      method: 'POST',
      url: `programs/${programId}/project`,
      body: formData,
      headers,
    });

    return data;
  },

  update: async (programId: string, projectId: string, formData: FormData, headers?: any) => {
    const { data } = await apiServiceCall({
      method: 'POST',
      url: `programs/${programId}/projects/${projectId}`,
      body: formData,
      headers,
    });

    return data;
  },
};
