import React, { useEffect, useState } from 'react';
import "../TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from '../firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Jen',
            username: 'JenJen',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png"
        })

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input className='tweetBox_imageInput'
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    placeholder="Optional: Enter image URL"

                />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox_tweetButton">
                    Tweet
                     </Button>
            </form>
        </div>
    )
}

export default TweetBox;