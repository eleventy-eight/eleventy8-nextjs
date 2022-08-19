import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function ModuleVideoPlayer(videoId) {
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='ratio ratio-16x9'>
                    <LiteYouTubeEmbed
                        id={videoId}
                        poster='maxresdefault'
                        noCookie={true}
                    />
                </div>
            </div>
        </div>
    );
}
