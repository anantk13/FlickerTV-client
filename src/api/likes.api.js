import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../Constants";

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });

  export const getLikedVideos = async() => {
    try{
    const {data} = API.get("/likes/videos")
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
    }
  }
  export const toggleCommentLike = async(commentId) => {
    try{
    const {data} = API.post(`/likes/toggle/c/${commentId}`)
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
    }
  }
  export const toggleVideoLike = async(videoId) => {
    try{
    const {data} = API.post(`/likes/toggle/v/${videoId}`)
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
    }
  }
  export const toggleTweetLike = async(tweetId) => {
    try{
    const {data} = API.post(`/likes/toggle/t/${tweetId}`)
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
    }
  }