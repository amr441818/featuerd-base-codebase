/**
 * Projects Feature - Public API
 *
 * This file serves as the single entry point for the projects feature.
 * Only exports listed here should be imported from other parts of the application.
 *
 * Usage:
 *   import { ProjectDemo, useGetProjectSections, ProjectService } from '@/features/projects';
 *
 * DO NOT import directly from internal folders:
 *   ❌ import { ProjectDemo } from '@/features/projects/components/ProjectDemo';
 *   ✅ import { ProjectDemo } from '@/features/projects';
 */

// ===== Components =====
export { ProjectDemo } from './components/ProjectDemo';

// ===== Hooks =====
export { default as useGetProjectSections } from './hooks/useGetProjectSections';
export { default as useCreateProject } from './hooks/useCreateProject';

// ===== Services =====
export { ProjectService } from './services/apis';

// ===== Types =====
export type { Project, Section, CreatedBy } from './types/project';
export type { ApiDataResponse } from './types/projectFormData';
