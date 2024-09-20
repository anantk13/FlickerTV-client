import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const fetchVideoById = async (id) => {
    const { data } = await axios.get(`/api/v1/videos/${id}`);
    return data;
};

const VideoDetail = () => {
    const { videoId } = useParams();
    const { data: video, isLoading, error } = useQuery(['video', videoId], () => fetchVideoById(videoId));

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading video</p>;

    return (
        <div className="video-detail-page">
            <video src={video.videoUrl} controls />
            <h2>{video.title}</h2>
            <p>{video.views} views • {new Date(video.createdAt).toLocaleDateString()}</p>
            <p>{video.description}</p>
        </div>
    );
};

export default VideoDetail;
