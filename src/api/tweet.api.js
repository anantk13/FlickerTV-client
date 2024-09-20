import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../Constants";

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });

  export const createTweet = async() => {
    try{
    const {data} = await API.post("/tweets/tweet")
    toast.success(data?.message);
    return data?.data;
    }catch{error}{
        toast.error(error?.response?.data?.error);
        throw error?.response?.data?.error;
    }
  }
  export const getUserTweets = async({ pageParam = 1, authenticated = true }) => {
    try{
        const { data } = await API.get(
            `/tweet${authenticated ? "" : "?guest=true"}`,
            {
              params: { page: pageParam, limit: 10 },
            }
          );
          return data?.data;
    }catch{error}{
        toast.error(error?.response?.data?.error);
        throw error?.response?.data?.error;
    }
  }
  export const updateTweet = async(tweetId,tweet) => {
    try{
    const {data} = await API.patch(`/tweets/${tweetId}`,tweet)
    toast.success(data?.message);
    return data?.data;
    }catch{error}{
        toast.error(error?.response?.data?.error);
        throw error?.response?.data?.error;
    }
  }
  export const deleteTweet = async(tweetId) => {
    try{
    const {data} = await API.delete(`/tweets/${tweetId}`)
    toast.success(data?.message);
    return data?.data;
    }catch{error}{
        toast.error(error?.response?.data?.error);
        throw error?.response?.data?.error;
    }
  }
