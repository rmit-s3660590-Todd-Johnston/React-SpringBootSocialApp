import React, {useState} from 'react';
import {Avatar, Form, Icon, Input, Layout, List, Menu, Modal, Typography} from "antd";
import ChatWindow from "../containers/ChatWindow";
import {FormComponentProps} from "antd/es/form";


interface ChatScreenProps extends FormComponentProps {
}

const ChatScreen: React.FC<ChatScreenProps> = (props: ChatScreenProps) => {
    const [openChat, setOpenChat] = useState('1');
    const [newChatSearchVisible, setNewChatSearchVisible] = useState(false);
    const [selectedPeople, setSelectedPeople] = useState<string[]>([]);

    const {form} = props;
    const {getFieldDecorator} = form;

    return <Layout>
        <Modal
            visible={newChatSearchVisible}
            onOk={() => {
                form.validateFields((err, values) => {
                    if (err) {
                        return;
                    }

                    // TODO::API
                    console.log('Received values of form: ', selectedPeople);
                    form.resetFields();
                    setNewChatSearchVisible(false);
                    setSelectedPeople([]);
                });
            }}
            onCancel={() => {
                form.resetFields();
                setNewChatSearchVisible(false);
                setSelectedPeople([]);
            }}
        >
            <Form style={{paddingTop: 13}}>
                <Form.Item>
                    {getFieldDecorator('Person', {})(<Input.Search placeholder="input search text" onSearch={value => console.log(value)} enterButton/>)}
                </Form.Item>
            </Form>

            <List
                dataSource={selectedPeople}
                renderItem={(item, index) => <Typography.Text style={{marginRight: 13}}>{item} <Icon onClick={() => setSelectedPeople(people => {
                    return people.filter((name) => item !== name)
                })} type="close" /></Typography.Text>}
            />

            <List
                dataSource={[
                    {name: "Tom Frantz"},
                    {name: "Jack Ryan"}
                ]}
                renderItem={(item, index) => <List.Item.Meta
                    style={{padding: 13}}
                    avatar={<Avatar/>}
                    title={<a onClick={() => {
                        setSelectedPeople(people => {
                            return people.includes(item.name) ? people : [...people, item.name];
                        });
                    }}>{item.name}</a>}
                />}
            />
        </Modal>

        <Layout.Sider>
            <Menu
                mode="inline"
                onSelect={({key}) => {
                    if (key === "0") {
                        setNewChatSearchVisible(true);
                    } else {
                        setOpenChat(key)
                    }
                }}
                selectedKeys={[openChat]}
                style={{height: '100%', borderRight: 0}}
            >
                <Menu.Item
                    key={'0'}
                >
                    + New Chat
                </Menu.Item>
                {["Tom", "Jack", "Todd", "Sherry"].map((item, key) => <Menu.Item
                    key={key + 1}
                >
                    {item}
                </Menu.Item>)}
            </Menu>
        </Layout.Sider>
        <ChatWindow/>
    </Layout>;
};

export default Form.create<ChatScreenProps>({name: 'newChat'})(ChatScreen);
