// pages/HomePage.js
import React from 'react';
import VideoCard from '../components/VideoCard';
import { useVideos } from '../hooks/useVideo';

const HomePage = () => {
    const { data: videos, isLoading, isError } = useVideos();

    if (isLoading) return <div className="p-4">Loading...</div>;
    if (isError) return <div className="p-4 text-red-500">Error loading videos</div>;

    return (
        <div className="flex flex-wrap">
            {videos.map(video => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
};

export default HomePage;
