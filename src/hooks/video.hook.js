import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getVideos,
  getVideoById,
  uploadVideo,
  deleteVideo,
  editVideo,
  togglePublishStatus,
  getNextVideos,
  updateVideoViews,
} from "../api/video.api";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useVideos = (options = {}) => {
  const { userId, sortBy, sortType, query } = options;

  return useInfiniteQuery({
    queryKey: ["videos", { userId, sortBy, sortType, query }],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await getVideos(pageParam, userId, sortBy, sortType, query);
      console.log("API response:", response); // Log the response
      return response;
    },
    getNextPageParam: (lastPage) => {
      console.log("lastPage:", lastPage); // Log the lastPage
      if (lastPage.hasNextPage === false) return;
      return lastPage.nextPage;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useVideoById = (videoId, isAuthenticated) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["video", videoId],
    queryFn: () =>
      isAuthenticated ? getVideoById(videoId) : getVideoById(videoId, false),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchHistory"] });
    },
    staleTime: 1000 * 60 * 2,
  });
};

export const useNextVideos = (videoId) => {
  return useQuery({
    queryKey: ["nextVideos", videoId],
    queryFn: () => getNextVideos(videoId),
    staleTime: 1000 * 60 * 3,
  });
};

export const useUploadVideo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => uploadVideo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["channelStats"],
      });
      queryClient.invalidateQueries({ queryKey: ["channelVideos"] });
    },
  });
};

export const useTogglePublish = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (videoId) => togglePublishStatus(videoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      queryClient.invalidateQueries({ queryKey: ["channelVideos"] });
    },
  });
};

export const useDeleteVideo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (videoId) => deleteVideo(videoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["channelVideos"] });
      queryClient.invalidateQueries({ queryKey: ["channelStats"] });
      queryClient.invalidateQueries({ queryKey: ["videos"] });
    },
  });
};

export const useEditVideo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ videoId, data }) => editVideo(videoId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      queryClient.invalidateQueries({ queryKey: ["channelVideos"] });
    },
  });
};

export const useUpdateVideoViews = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (videoId) => updateVideoViews(videoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
    },
  });
};