import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants";

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const getVideos = async (
  page = null,
  userId = null,
  sortBy = null,
  sortType = null,
  query = null,
  limit = null
) => {
  console.log(userId);
  try {
    const url = new URL(`${BASE_URL}/video`);
    if (userId) url.searchParams.set("userId", userId);
    if (sortBy) url.searchParams.set("sortBy", sortBy);
    if (sortType) url.searchParams.set("sortType", sortType);
    if (query) url.searchParams.set("query", query);
    if (page) url.searchParams.set("page", page);
    if (limit) url.searchParams.set("limit", limit);

    const response = await API.get(url.href + "/");
    return response?.data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    console.log(error);
    throw error?.response?.data?.error;
  }
};

export const getVideoById = async (videoId, isAuthenticated = true) => {
  try {
    const url = `/video/v/${videoId}${isAuthenticated ? "" : "?guest=true"}`;
    const { data } = await API.get(url);
    return data?.data;
  } catch (error) {
    toast.error(
      error?.response?.data?.error ||
      "An error occurred while fetching the video"
    );
    throw error?.response?.data?.error || "Failed to fetch video";
  }
};

export const uploadVideo = async (data) => {
  const videoData = new FormData();
  videoData.append("video", data.video);
  videoData.append("thumbnail", data.thumbnail);
  videoData.append("title", data.title);
  videoData.append("description", data.description);
  videoData.append("isPublished", true);
  try {
    const { data } = await API.post("/video/", videoData);
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

export const togglePublishStatus = async (videoId) => {
  try {
    const { data } = await API.patch(`/video/toggle/publish/${videoId}`);
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const { data } = await API.delete(`/video/v/${videoId}`);
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

export const editVideo = async (videoId, data) => {
  const videoData = new FormData();
  if (data.thumbnail) {
    videoData.append("thumbnail", data.thumbnail);
  }
  videoData.append("title", data.title);
  videoData.append("description", data.description);
  try {
    const { data } = await API.patch(`/video/v/${videoId}`, videoData);
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

export const getNextVideos = async (videoId) => {
  console.log("Fetching next videos for videoId:", videoId);  // Add this line for debugging
  try {
    const { data } = await API.get(`/video/next/${videoId}`);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

export const updateVideoViews = async (videoId) => {
  try {
    const { data } = await API.patch(`/video/update/views/${videoId}`);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};