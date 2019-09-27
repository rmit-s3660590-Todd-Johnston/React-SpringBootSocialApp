import React, {useState} from 'react';
import {Button, Form, Input, Layout, Modal} from "antd";
import {FormComponentProps} from "antd/es/form";


interface NewPostProps extends FormComponentProps {
}

const NewPost: React.FC<NewPostProps> = (props: NewPostProps) => {
    const {form} = props;
    const {getFieldDecorator} = form;

    const [visible, setVisible] = useState(false);


    return <Layout.Content>
        <Modal
            visible={visible}
            title="Create a new Post"
            okText="Create"
            onCancel={() => setVisible(false)}
            onOk={() => {
                form.validateFields((err, values) => {
                    if (err) {
                        return;
                    }

                    // TODO::API
                    console.log('Received values of form: ', values);
                    form.resetFields();
                    setVisible(false);
                });
            }}
        >
            <Form
                labelCol={{xs: {span: 24}, sm: {span: 4}}}
                wrapperCol={{xs: {span: 24}, sm: {span: 20}}}
            >
                <Form.Item
                    label={"Title"}
                >
                    {getFieldDecorator('title', {
                        rules: [{required: true, message: 'Please input the title of the post!'}]
                    })(<Input

                    />)}
                </Form.Item>
                <Form.Item
                    label={"Details"}
                >
                    {getFieldDecorator('details', {
                        rules: [{required: true, message: 'Please input the details of the post!'}]
                    })(<Input/>)}
                </Form.Item>
            </Form>
        </Modal>

        <Button
            onClick={() => setVisible(true)}
        >New Post</Button>
    </Layout.Content>;
};

export default Form.create<NewPostProps>({name: "NewPostForm"})(NewPost);
