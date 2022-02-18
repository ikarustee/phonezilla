import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import contactIllu from "../Icons/contact--illu.png"

const Contact = () => {
  return (
    <main>
    <div className="contact">
        <h1>Leave us a message</h1>
        <div className="contact__illustration">
            <img src={contactIllu} alt="" width="400" />
        </div>
        <Form >
            <Form.Item
                name={['user', 'name']}
                label="Name"
            >
            <Input placeholder="Your name"/>
        </Form.Item>
        <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
            {
                type: 'email',
                required: true
            },
            ]}
        >
            <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Message">
            <Input.TextArea rows="6" />
        </Form.Item>
        <Form.Item>
            <Checkbox rules={[
                {
                    required: true
                }
            ]}>
            <span style={{color: 'red'}}>*</span>You agree to our Terms and Conditions
            </Checkbox>
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit" className="custom">
            Submit
            </Button>
        </Form.Item>
        </Form>
        </div>
    </main>
  )
}

export default Contact