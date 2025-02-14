import React, { useState } from 'react';

import Timeline from '../index';
import { Icon } from '../../index';
import { IconAlertTriangle } from '@douyinfe/semi-icons';

export default {
  title: 'Timeline'
}

export const DefaultTimeline = () => (
  <div>
    <Timeline>
      <Timeline.Item time="2015-09-01">创建服务现场</Timeline.Item>
      <Timeline.Item time="2015-09-01">初步排除网络异常</Timeline.Item>
      <Timeline.Item time="2015-09-01">技术测试异常</Timeline.Item>
      <Timeline.Item time="2015-09-01">网络异常正在修复</Timeline.Item>
    </Timeline>
  </div>
);

DefaultTimeline.story = {
  name: 'default Timeline',
};

export const Color = () => (
  <div>
    <Timeline>
      <Timeline.Item time="2015-09-01" type="success">
        创建服务现场
      </Timeline.Item>
      <Timeline.Item time="2015-09-01">初步排除网络异常</Timeline.Item>
      <Timeline.Item time="2015-09-01" type="warning">
        技术测试异常
      </Timeline.Item>
      <Timeline.Item time="2015-09-01" type="error">
        网络异常正在修复
      </Timeline.Item>
    </Timeline>
  </div>
);

Color.story = {
  name: 'color',
};

export const Custom = () => (
  <div>
    <Timeline>
      <Timeline.Item time="2015-09-01" color="pink">
        创建服务现场
      </Timeline.Item>
      <Timeline.Item time="2015-09-01" color="pink">
        <span
          style={{
            fontSize: '18px',
          }}
        >
          初步排除网络异常
        </span>
      </Timeline.Item>
      <Timeline.Item time="2015-09-01" dot={<IconAlertTriangle />} type="warning">
        技术测试异常
      </Timeline.Item>
      <Timeline.Item time="2015-09-01" extra="节点辅助说明信息">
        初步排除网络异常
      </Timeline.Item>
    </Timeline>
  </div>
);

Custom.story = {
  name: 'custom',
};

export const Mode = () => (
  <div>
    <div
      style={{
        width: '300px',
      }}
    >
      <Timeline mode="alternate">
        <Timeline.Item time="2015-09-01">创建服务现场</Timeline.Item>
        <Timeline.Item time="2015-09-01">初步排除网络异常</Timeline.Item>
        <Timeline.Item time="2015-09-01">技术测试异常</Timeline.Item>
        <Timeline.Item time="2015-09-01">网络异常正在修复</Timeline.Item>
      </Timeline>
    </div>
    <br />
    <div
      style={{
        width: '300px',
      }}
    >
      <Timeline mode="right">
        <Timeline.Item time="2015-09-01">创建服务现场</Timeline.Item>
        <Timeline.Item time="2015-09-01">初步排除网络异常</Timeline.Item>
        <Timeline.Item time="2015-09-01">技术测试异常</Timeline.Item>
        <Timeline.Item time="2015-09-01">网络异常正在修复</Timeline.Item>
      </Timeline>
    </div>
    <br />
    <div
      style={{
        width: '300px',
      }}
    >
      <Timeline mode="center">
        <Timeline.Item time="2015-09-01">创建服务现场</Timeline.Item>
        <Timeline.Item time="2015-09-01">初步排除网络异常</Timeline.Item>
        <Timeline.Item time="2015-09-01">技术测试异常</Timeline.Item>
        <Timeline.Item time="2015-09-01">网络异常正在修复</Timeline.Item>
      </Timeline>
    </div>
  </div>
);

Mode.story = {
  name: 'mode',
};

const data = [
  {
    time: '2019-07-14 10:35',
    extra: '节点辅助说明信息',
    content: '创建服务现场',
    type: 'ongoing',
  },
  {
    time: '2019-06-13 16:17',
    extra: '节点辅助说明信息',
    content: (
      <span
        style={{
          fontSize: '18px',
        }}
      >
        初步排除网络异常
      </span>
    ),
    color: 'pink',
  },
  {
    time: '2019-05-14 18:34',
    extra: '节点辅助说明信息',
    dot: <IconAlertTriangle />,
    content: '技术测试异常',
    type: 'warning',
  },
  {
    time: '2019-05-09 09:12',
    extra: '节点辅助说明信息',
    content: '网络异常正在修复',
    type: 'success',
  },
];

export const DataSource = () => (
  <div
    style={{
      width: '400px',
    }}
  >
    <Timeline mode="alternate" dataSource={data} />
  </div>
);

DataSource.story = {
  name: 'dataSource',
};
