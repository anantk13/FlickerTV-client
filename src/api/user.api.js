import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../Constants";

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });

  export const getWatchHistory = async() => {
        try{
        const {data} = await API.get("/users/history")
        return data?.data;
        }catch(error){
          toast.error(error?.response?.data?.error)
          throw error?.response?.data?.error
        }
  }
  export const clearWatchHistory = async() => {
        try{
        const {data} = await API.delete("/users/history")
        toast.success(data?.message);
        return data?.data;
        }catch(error){
          toast.error(error?.response?.data?.error)
          throw error?.response?.data?.error
        }
  }
  export const getUserChannelProfile = async() => {
        try{
        const {data} = await API.get(`/users/c/${username}`)
        return data?.data;
        }catch(error){
          toast.error(error?.response?.data?.error)
          throw error?.response?.data?.error
        }
  }
  export const updateUserAvatar = async(data) => {
        
          const formData = new FormData()
          if (data) {
            formData.append("avatar", data);
          }
          try{
        const {data} = await API.patch("/users/avatar",formData)
        toast.success(data?.message);
        return data?.data;
        }catch(error){
          toast.error(error?.response?.data?.error)
          throw error?.response?.data?.error
        }
  }
  export const updateUserCoverImage = async(data) => {
        
          const formData = new FormData()
          if (data) {
            formData.append("coverImage", data);
          }
          try{
        const {data} = await API.patch("/users/cover-image",formData)
        toast.success(data?.message);
        return data?.data;
        }catch(error){
          toast.error(error?.response?.data?.error)
          throw error?.response?.data?.error
        }
  }
  export const updateAccountDetails = async(newData) => {
        try{
        const {data} = await API.patch("/users/update-account",newData)
        toast.success(data?.message);
        return data?.data;
        }catch(error){
          toast.error(error?.response?.data?.error)
          throw error?.response?.data?.error
        }
  }
  