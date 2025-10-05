import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const upLoadResume = async (file) => {
  const formData = new FormData();
  formData.append("resume", file); // Must match backend

  try {
    const response = await axiosInstance.post(API_PATHS.FILE.UPLOAD_RESUME, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data; // { resumeUrl: "..." }
  } catch (error) {
    console.error("Error uploading the resume:", error);
    throw error;
  }
};

export default upLoadResume;

