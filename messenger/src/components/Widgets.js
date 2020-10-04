import React from 'react';
import "../Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets_input'>
                <SearchIcon className='widgets_searchIcon' />
                <input placeholder="Search Twitter" type='text' />

            </div>
            <div className="widgets_widgetContainer">
                <h2> What's Happening? </h2>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="NASA"
                    options={{ height: 700 }}
                />
                <TwitterShareButton
                    url={"https://facebook.com"}
                    options={{ text: "#reactjs is awesome", via: "" }}
                />
            </div>
        </div>
    );
}

export default Widgets;