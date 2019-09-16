import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Layout, Row, Typography} from "antd";


interface PostProps {
}

const Post: React.FC<PostProps> = (props: PostProps) => {
    return <Layout.Content style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid black",
        borderRadius: 7,
        padding: 13,
        marginBottom: 13
    }}>
        <Row>
            <Avatar icon="user" style={{marginRight: 13}}/>
            <Link to={"/profile"}>Tom Frantz</Link>
        </Row>
        <Typography.Title>Post Title</Typography.Title>
        <Typography.Text>Post body. THis should be longer I guess.</Typography.Text>

    </Layout.Content>;
};

export default Post;
