import React from 'react';
import {Layout} from "antd";
import Post from "../components/Post";
import NewPost from "../components/NewPost";


interface WallProps {
}

const Wall: React.FC<WallProps> = (props: WallProps) => {
    return <Layout.Content
        style={{padding: 13, margin: 13}}
    >
        <NewPost/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </Layout.Content>;
};

export default Wall;
