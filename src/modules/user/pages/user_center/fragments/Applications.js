/**
 * Created by mangyan on 2018/12/25.
 */
import React, { PureComponent } from 'react';

import { List, Avatar, Tag, Icon, Tooltip, Card, Dropdown, Menu } from 'antd';
import moment from 'moment';
import numeral from 'numeral';

import { Dimens } from '../../../../../mango-web';
import Themes from '../../../../../assets/Theme';
import FormatUtils from '../../../../../utils/FormatUtils';

export default class Applications extends PureComponent {

	static defaultProps = {};

	static propTypes = {};

	constructor(props) {
		super(props);
	}

	render() {
		const {} = this.props;

		const itemMenu = (
			<Menu>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
						1st menu item
					</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
						2nd menu item
					</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
						3d menu item
					</a>
				</Menu.Item>
			</Menu>
		);

		let list = [
			{
				id: 1,
				title: 'Apipay',
				activeUser:120000,
				newUser:1291,
			},
			{
				id: 1,
				title: 'Feizu',
				activeUser:1000001,
				newUser:1291,
			}
		];

		return (
			<List
				rowKey="id"
				grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
				dataSource={list}
				renderItem={item => (
					<List.Item
						key={item.id}
					>
						<Card
							hoverable
							bodyStyle={{paddingBottom: 20}}
							actions={[
								<Tooltip title="下载">
									<Icon type="download"/>
								</Tooltip>,
								<Tooltip title="编辑">
									<Icon type="edit"/>
								</Tooltip>,
								<Tooltip title="分享">
									<Icon type="share-alt"/>
								</Tooltip>,
								<Dropdown overlay={itemMenu}>
									<Icon type="ellipsis"/>
								</Dropdown>,
							]}
						>
							<Card.Meta avatar={<Avatar size="small" src={item.avatar}/>} title={item.title}/>
							<div>
								{this.renderCardInfo(FormatUtils.formatWan(item.activeUser), numeral(item.newUser).format('0,0'))}
							</div>
						</Card>
					</List.Item>
				)}
			/>
		);
	}

	renderCardInfo = (activeUser, newUser) => {
		return (
			<div>
				<div>
					<p>活跃用户</p>
					<p>{activeUser}</p>
				</div>
				<div>
					<p>新增用户</p>
					<p>{newUser}</p>
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
	em: {
		marginLeft: Dimens.d12,
		color: Themes.font_color_secondary
	}

};
