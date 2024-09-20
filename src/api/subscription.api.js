import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../Constants";

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });

  export const toggleSubscribe = async() => {
    try{
     const {data} = await API.post(`/subscriptions/c/${subscriberId}`)
     return data?.data;
  }  catch (error) {
     console.log(error);
     toast.error(error?.response?.data?.error);
     throw error?.response?.data?.error;
    }
  }
  export const getUserChannelSubscribers = async() => {
    try{
      const {data} = await API.get(`/subscriptions/u/${channelId}`)
      return data?.data;
    } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
    }
  }
  export const getSubscribedChannels = async() => {
    try{
      const {data} = await API.get(`/subscriptions/c/${subscriberId}`)
      return data?.data;
    } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
    }
  }