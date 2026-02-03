'use client';

import { useState } from 'react';

import useCreateProject from '../hooks/useCreateProject';
import useGetProjectSections from '../hooks/useGetProjectSections';

/**
 * ProjectDemo Component
 *
 * This component demonstrates how to use hooks and services in the projects feature.
 * It follows the patterns defined in docs/FEATURE_STRUCTURE.md
 */
export const ProjectDemo = () => {
  const [projectId, setProjectId] = useState<string>('1');
  const [programId, setProgramId] = useState<string>('1');

  // Example 1: Using a query hook to fetch data
  const { sections, isLoading } = useGetProjectSections(projectId);

  // Example 2: Using a mutation hook to create/update data
  const createProjectMutation = useCreateProject();

  // Handler for creating a new project
  const handleCreateProject = async () => {
    const formData = new FormData();
    formData.append('name', 'New Project');
    formData.append('description', 'Demo project created from ProjectDemo component');
    formData.append('start_date', new Date().toISOString());
    formData.append('end_date', new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString());

    createProjectMutation.mutate({ programId, formData });
  };

  return (
    <div className='mx-auto max-w-4xl p-6'>
      <h1 className='mb-6 text-3xl font-bold'>Projects Feature Demo</h1>

      {/* Section 1: Query Hook Demo */}
      <div className='mb-8 rounded-lg border p-4'>
        <h2 className='mb-4 text-2xl font-semibold'>1. Query Hook: useGetProjectSections</h2>
        <p className='mb-4 text-gray-600'>
          This demonstrates fetching data using a custom React Query hook.
        </p>

        <div className='mb-4'>
          <label className='mb-2 block font-medium'>Project ID:</label>
          <input
            type='text'
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            className='w-64 rounded border px-3 py-2'
            placeholder='Enter project ID'
          />
        </div>

        {isLoading ? (
          <div className='text-blue-600'>Loading sections...</div>
        ) : sections.length > 0 ? (
          <div>
            <h3 className='mb-2 font-semibold'>Sections ({sections.length}):</h3>
            <ul className='space-y-2'>
              {sections.map((section) => (
                <li key={section.id} className='rounded bg-gray-50 p-3'>
                  <div className='flex items-center gap-3'>
                    <div
                      className='h-4 w-4 rounded-full'
                      style={{ backgroundColor: section.color }}
                    />
                    <span className='font-medium'>{section.name}</span>
                    <span className='text-sm text-gray-500'>ID: {section.id}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className='text-gray-500'>No sections found for this project.</div>
        )}
      </div>

      {/* Section 2: Mutation Hook Demo */}
      <div className='mb-8 rounded-lg border p-4'>
        <h2 className='mb-4 text-2xl font-semibold'>2. Mutation Hook: useCreateProject</h2>
        <p className='mb-4 text-gray-600'>
          This demonstrates creating data using a custom React Query mutation hook.
        </p>

        <div className='mb-4'>
          <label className='mb-2 block font-medium'>Program ID:</label>
          <input
            type='text'
            value={programId}
            onChange={(e) => setProgramId(e.target.value)}
            className='w-64 rounded border px-3 py-2'
            placeholder='Enter program ID'
          />
        </div>

        <button
          onClick={handleCreateProject}
          disabled={createProjectMutation.isPending}
          className='rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400'
        >
          {createProjectMutation.isPending ? 'Creating...' : 'Create Demo Project'}
        </button>

        {createProjectMutation.isError && (
          <div className='mt-3 rounded bg-red-50 p-3 text-red-700'>
            Error: {createProjectMutation.error?.message || 'Failed to create project'}
          </div>
        )}

        {createProjectMutation.isSuccess && (
          <div className='mt-3 rounded bg-green-50 p-3 text-green-700'>
            Project created successfully!
          </div>
        )}
      </div>

      {/* Section 3: Architecture Notes */}
      <div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
        <h2 className='mb-3 text-xl font-semibold'>📚 Architecture Pattern</h2>
        <ul className='space-y-2 text-sm'>
          <li className='flex gap-2'>
            <span className='font-mono text-blue-700'>1.</span>
            <span>
              <strong>Types</strong> in <code>types/</code> define the data structure
            </span>
          </li>
          <li className='flex gap-2'>
            <span className='font-mono text-blue-700'>2.</span>
            <span>
              <strong>Services</strong> in <code>services/</code> define API calls using{' '}
              <code>apiServiceCall</code>
            </span>
          </li>
          <li className='flex gap-2'>
            <span className='font-mono text-blue-700'>3.</span>
            <span>
              <strong>Hooks</strong> in <code>hooks/</code> wrap services with React Query
            </span>
          </li>
          <li className='flex gap-2'>
            <span className='font-mono text-blue-700'>4.</span>
            <span>
              <strong>Components</strong> use hooks to access data and mutations
            </span>
          </li>
          <li className='flex gap-2'>
            <span className='font-mono text-blue-700'>5.</span>
            <span>
              <strong>index.ts</strong> exports the public API of the feature
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
