import React, { useState } from 'react';
import "./VideoSidebar.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSidebar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__container">
                <div className="videoSidebar__button">
                    {liked ? (
                        <FavoriteIcon 
                            fontSize="medium" 
                            onClick={(e) => setLiked(false)}
                        />
                    ) : (
                        <FavoriteBorderIcon 
                            fontSize="medium"
                            onClick={(e) => setLiked(true)}
                        />
                    )}
                    <p>{ liked ? likes + 1 : likes }</p>
                </div>
                <div className="videoSidebar__button">
                    <MessageIcon fontSize="medium" />
                    <p>{messages}</p>
                </div>
                <div className="videoSidebar__button">
                    <ShareIcon fontSize="medium" />
                    <p>{shares}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoSidebar
