/**
 * Created by mangyan on 2018/12/25.
 */
import React, { PureComponent } from 'react';

import { List, Avatar, Tag, Icon } from 'antd';
import moment from 'moment';

import { Dimens } from '../../../../../mango-web';
import Themes from '../../../../../assets/Theme';

export default class Articles extends PureComponent {

  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    const {} = this.props;

    let list = [
      {
        id: 1,
        title: 'Apipay',
        content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        owner: '付小小',
        href: 'https://ant.design',
        updatedAt: '1545707893',
        star: 1,
        like: 10
      },
      {
        id: 1,
        title: 'Feizu',
        content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        owner: '付小小',
        href: 'https://ant.design',
        updatedAt: '154570000',
        star: 1,
        like: 10
      }
    ];

    const IconText = ({type, text}) => (
      <span>
        <Icon type={type} style={{marginRight: 8}}/>
        {text}
      </span>
    );

    return (
      <List
        size="large"
        rowKey="id"
        itemLayout="vertical"
        dataSource={list}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <IconText type="star-o" text={item.star}/>,
              <IconText type="like-o" text={item.like}/>,
              <IconText type="message" text={item.message}/>,
            ]}
          >
            <List.Item.Meta
              title={
                <a href={item.href}>
                  {item.title}
                </a>
              }
              description={
                <span>
                  <Tag>Ant Design</Tag>
                  <Tag>设计语言</Tag>
                  <Tag>蚂蚁金服</Tag>
                </span>
              }
            />
            {this.renderArticleListContent(item)}
          </List.Item>
        )}
      />
    );
  }

  renderArticleListContent = (item) => {
    const {content, avatar, owner, href, updatedAt} = item;
    return (
      <div style={styles.list_content}>
        <div style={styles.description}>{content}</div>
        <div style={styles.extra}>
          <Avatar src={avatar} size="small"/>
          <a href={href} style={styles.a}>{owner}</a> 发布在 <a href={href}>{href}</a>
          <em style={styles.em}>{moment.unix(updatedAt).format('YYYY-MM-DD HH:mm')}</em>
        </div>
      </div>
    );
  };

}

const styles = {
  container: {},
  list_content: {},
  description: {
    lineHeight: Dimens.d22,
    maxWidth: Dimens.d720
  },
  extra: {
    color: Themes.font_color_secondary,
    marginTop: Dimens.d16,
    lineHeight: Dimens.d22
  },
  a: {
    marginLeft: Dimens.d12
  },
  em:{
    marginLeft: Dimens.d12,
    color:Themes.font_color_secondary
  }

};
