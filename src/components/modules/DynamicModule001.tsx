import React from 'react'
import { Typography } from 'antd'
import DynamicModule from '../../layout/PageModule'
import { PageModuleProps } from '../../types'

const DynamicModule001: React.FC<PageModuleProps> = ({
  title,
  isLoading,
  remove,
}) => {
  return (
    <DynamicModule title={title} remove={remove} isLoading={isLoading}>
      <Typography.Text>
        Hi I'm a dynamic module <b>{title}</b>
      </Typography.Text>
    </DynamicModule>
  )
}

export default DynamicModule001
