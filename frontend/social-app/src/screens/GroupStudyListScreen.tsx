import React from 'react';
import {Button, Layout, List, Typography} from 'antd';


interface GroupStudyListScreenProps {
    history: any;
}

const GroupStudyListScreen: React.FC<GroupStudyListScreenProps> = (props: GroupStudyListScreenProps) => {
    return <Layout.Content
        style={{margin: 13, padding: 13, backgroundColor: "#FFF"}}
    >
        <Typography.Title>Study Groups</Typography.Title>
        <Button
            type={'primary'}
            onClick={() => props.history.push('/search')}
        >Join New Study Group</Button>
        <List
            dataSource={[
                {name: "Group 1", subject: "SEPT"},
                {name: "Group 2", subject: "Maths"}
            ]}
            renderItem={(item) => <List.Item
                onClick={() => {props.history.push(`/study-group`)}}
            ><List.Item.Meta
                title={item.name}
                description={item.subject}
            /></List.Item>}
        />
    </Layout.Content>;
};

export default GroupStudyListScreen;
