export default function SitePodcast() {
    return (
        <div id='podcast'>
            <div className='row'>
                <div className='col'>
                    <h2>Podcast</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <iframe
                        src='https://open.spotify.com/embed/show/0qyafuXnqprjWP5zs5wBKj?utm_source=generator&amp;theme=0'
                        width='100%'
                        height='352'
                        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
