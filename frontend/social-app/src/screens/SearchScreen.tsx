import React, {useState} from 'react';
import Search from "../components/Search";
import {Avatar, Button, Layout, List, Typography} from "antd";


interface SearchScreenProps {
    history: any;
}

const mockSearchData = [
    {
        type: "user",
        name: "Tom Frantz"
    }, {
        type: "mentor",
        name: "Jack Ryan"
    }, {
        type: "group",
        name: "SEPT",
        descr: "description goes here or something"
    }, {
        type: "post",
        name: "Some Post",
        descr: "description goes here or something"
    }
];

interface Item {
    name: string;
    type: string;
    descr: string;
}

const SearchScreen: React.FC<SearchScreenProps> = (props: SearchScreenProps) => {
    const [items, setItems] = useState<Item[]>([]);

    return <Layout.Content style={{margin: 13, padding: 13, backgroundColor: "#FFF"}}>
        <Search
            getResults={(results: Item) => {setItems((prev: Item[]) => {prev.push(results); return prev;})}}
        />

        <Typography.Title>Users</Typography.Title>
        <List
            dataSource={items.filter(
                item => item.type === "user"
            )}
            renderItem={(item) => <List.Item
                onClick={() => {
                    props.history.push('/profile')
                }}
            >
                <List.Item.Meta
                    avatar={<Avatar/>}
                    title={item.name}
                />
            </List.Item>}
        />

        <Typography.Title>Mentors</Typography.Title>
        <List
            dataSource={mockSearchData.filter(
                item => item.type === "mentor"
            )}
            renderItem={(item) => <List.Item
                onClick={() => {
                    props.history.push('/profile/s1234')
                }}
            >
                <List.Item.Meta
                    avatar={<Avatar/>}
                    title={item.name}
                />
            </List.Item>}
        />

        <Typography.Title>Posts</Typography.Title>
        <List
            dataSource={mockSearchData.filter(
                item => item.type === "post"
            )}
            renderItem={(item) => <List.Item
                onClick={() => {
                    props.history.push('/wall')
                }}
            >
                <List.Item.Meta
                    title={item.name}
                    description={item.descr}
                />
            </List.Item>}
        />

        <Typography.Title>Study Groups</Typography.Title>
        <List
            dataSource={mockSearchData.filter(
                item => item.type === "group"
            )}
            renderItem={(item) => <List.Item
                onClick={() => {
                    props.history.push('/study-group')
                }}
            >
                <List.Item.Meta
                    title={item.name}
                    description={item.descr}
                />
                <Button onClick={() => {}}>Join</Button>
            </List.Item>}
        />
    </Layout.Content>
};

export default SearchScreen;
