export const BASE_URL = "https://boafoconnect-2.onrender.com";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", 
    LOGIN: "/api/auth/login", 
    GET_PROFILE: "/api/auth/profile", 
    UPDATE_PROFILE: "/api/user/profile",
    
    DELETE_RESUME: "/api/user/resume", 
  },

  FILE: {
    UPLOAD_RESUME: "/api/user/upload-resume",
  },
  DASHBOARD: {
    OVERVIEW: "/api/analytics/overview",
  },

  JOBS: {
    GET_ALL_JOBS: "/api/jobs",
    GET_JOB_BY_ID: (id) => `/api/jobs/${id}`,
    POST_JOB: "/api/jobs",
    GET_JOBS_EMPLOYER: "/api/jobs/get-jobs-employer",
    UPDATE_JOB: (id) => `/api/jobs/${id}`,
    TOGGLE_CLOSE: (id) => `/api/jobs/${id}/toggle-close`,
    DELETE_JOB: (id) => `/api/jobs/${id}`,

    SAVE_JOB: (id) => `/api/save-jobs/${id}`,
    UNSAVE_JOB: (id) => `/api/save-jobs/${id}`,
    GET_SAVED_JOBS: "/api/save-jobs/my",
  },

  APPLICATIONS: {
    APPLY_TO_JOB: (id) => `/api/applications/${id}`,         // POST /api/applications/:jobId
    GET_ALL_APPLICATIONS: (id) => `/api/applications/job/${id}`, // GET /api/applications/job/:jobId
    UPDATE_STATUS: (id) => `/api/applications/${id}/status`, // PUT /api/applications/:id/status
  },

  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image",
  },
};
