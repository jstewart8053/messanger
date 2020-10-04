import React from 'react';
import "../TweetBox.css";
import { Avatar, Button } from "@material-ui/core";



function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar src="https://lh3.googleusercontent.com/proxy/-5x0q-RxiuJECLWRAxL-px34gsFhf5B-CnvHGNAxUAOdrVQjEHd3NgkxnKJZtc9GmihzuIyB2Wr1CddTrZcZZsYjZ7e7fgCOVFyAhUV4YQhXaJ7AwKCbgg" />
                    <input placeholder="What's happening?" type="text" />
                    <input placeholder="Enter image URL" type="text" />
                </div>
                <Button> Tweet </Button>
            </form>
        </div>
    )
}

export default TweetBox;