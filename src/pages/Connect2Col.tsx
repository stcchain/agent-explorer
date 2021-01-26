import React from 'react'
import { Typography, Form, Input, Button, Card, Space } from 'antd'
import Page from '../layout/Page'
const { Title } = Typography

const Connect = () => {
  const [form] = Form.useForm()

  const rightContent = () => {
    return (
      <Space direction="vertical" style={{ width: '100%' }}>
        <Card title="Card">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    )
  }

  return (
    <Page
      header={<Title style={{ fontWeight: 'bold' }}>Connect</Title>}
      rightContent={rightContent()}
    >
      <Form form={form} layout={'vertical'}>
        <Form.Item label="Agent Schema URL">
          <Input size="large" placeholder="Agent schema" />
        </Form.Item>
        <Form.Item label="API Key">
          <Input size="large" placeholder="API Key" />
        </Form.Item>
        <Form.Item>
          <Button size="large" type="primary" block shape="round">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Card>Card 1</Card>
    </Page>
  )
}

export default Connect
