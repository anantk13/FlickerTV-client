import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../Constants";

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });

  export const getVideoComments = async(
    videoId = null,
    authenticated = true,
    page = null,
    limit = null
  ) => {
    try{
    const url = new URL(
    `${BASE_URL}/comment/${videoId}${authenticated ? "" : "?guest=true"}`
    );

    if (page) url.searchParams.set("page", page);
    if (limit) url.searchParams.set("limit", limit);
    const {data} = await API.get(url.href)
    toast.success(data?.message);
    return data?.data;
    }catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
}

  export const addComment = async(videoId,comment) => {
    try{
    const {data} = await API.post(`/comments/${videoId}`,comment)
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
}
  export const deleteComment = async(commentId) => {
    try{
    const {data} = await API.delete(`/comments/c/${commentId}`)
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
}
  export const updateComment = async(commentId,comment) => {
    try{
    const {data} = await API.patch(`/comments/c/${commentId}`,comment)
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
}
  