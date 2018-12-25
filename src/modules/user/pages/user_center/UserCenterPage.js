/**
 * Created by mangyan on 2018/12/23.
 */
import React, { PureComponent } from 'react';
import { connect, } from 'dva';
import { Link } from 'dva/router';

import { Row, Col, Card, Divider, Tag, Input, Icon, Spin, Avatar, Menu } from 'antd';
import { Dimens, MangoUtils, RouterUtils } from '../../../../mango-web';
import Themes from '../../../../assets/Theme';

@connect(({user_center}) => ({user_center}))
class UserCenterPage extends PureComponent {

	render() {

		const operationTabList = [
			{
				key: 'articles',
				tab: (
					<span>文章 <span style={{fontSize: 14}}>(8)</span></span>
				),
			},
			{
				key: 'applications',
				tab: (<span>应用 <span style={{fontSize: 14}}>(8)</span></span>
				),
			},
			{
				key: 'projects',
				tab: (<span>项目 <span style={{fontSize: 14}}>(8)</span></span>
				),
			},
		];

		const {inputVisible, inputValue, newTags, projectLoading} = this.props.user_center;
		let currentUser = {
			avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
			name: '芒言',
			signature: '海纳百川，有容乃大',
			group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
			geographic: {
				province: {
					label: '浙江省'
				},
				city: {
					label: '杭州市'
				}
			},
			title: '交互专家',
			tags: [
				{
					key: 'good',
					label: '很有想法的',
				},
				{
					key: 'good',
					label: '很有想法的',
				},
				{
					key: 'good',
					label: '很有想法的',
				},
			],
		};

		let notice = [
			{
				id: 1,
				href: '',
				logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545704939273&di=a6196d31a6c2dc5d45b1e26c0d5cfb6d&imgtype=0&src=http%3A%2F%2Ffile.guoaso.com%2Fg1%2FM00%2F76%2F0B%2FCilEmVfWWjOAK_CuAABZZ3N0JJ4566.jpg',
				member: '科学搬砖组'
			},
			{id: 1, href: '', logo: '', member: '用户体验团队'},
			{id: 1, href: '', logo: '', member: '技术架构中心'},
		];

		return (
			<Row gutter={24}>
				<Col lg={7} md={24}>
					<Card
						bordered={false}
						style={{marginBottom: 24}}
						loading={false}
					>

						{/*个人信息描述*/}
						<div>

							<div style={styles.avatar_holder}>
								<img alt="" src={currentUser.avatar} style={styles.avatar_img}/>
								<div style={styles.avatar_name}>{currentUser.name}</div>
								<div>{currentUser.signature}</div>
							</div>

							<div style={styles.detail}>
								<p>
									{currentUser.title}
								</p>
								<p>
									{currentUser.group}
								</p>
								<p>
									{currentUser.geographic.province.label}
									{currentUser.geographic.city.label}
								</p>
							</div>
						</div>

						<Divider dashed/>


						{/*个人标签*/}
						<div style={styles.tags}>
							<div style={styles.title}>标签</div>
							{currentUser.tags.concat(newTags).map(item => (
								<Tag key={item.key} style={styles.tag}>{item.label}</Tag>
							))}
							{inputVisible && (
								<Input
									ref={(refs) => this.input = refs}
									type="text"
									size="small"
									style={{width: 78}}
									value={inputValue}
									onChange={(e) => MangoUtils.dispatch(this, 'user_center', 'pureInputChange', {inputValue: e.target.value})}
									onBlur={() => MangoUtils.dispatch(this, 'user_center', 'pureInputConfirm')}
									onPressEnter={() => MangoUtils.dispatch(this, 'user_center', 'pureInputConfirm')}
								/>
							)}
							{!inputVisible && (
								<Tag
									onClick={() => MangoUtils.dispatch(this, 'user_center', 'pureShowInput')}
									style={styles.tag_plus}
								>
									<Icon type="plus"/>
								</Tag>
							)}
						</div>
						<Divider dashed/>

						{/*团队*/}
						<div style={styles.tags}>
							<div style={styles.title}>团队</div>
							<Spin spinning={projectLoading}>
								<Row gutter={36}>
									{notice.map(item => (
										<Col key={item.id} lg={24} xl={12}>
											<Link to={item.href}>
												<div style={{display: 'flex',}}>
													<Avatar size="small" src={item.logo}/>
													<p style={{marginLeft: Dimens.d8}}>{item.member}</p>
												</div>

											</Link>
										</Col>
									))}
								</Row>
							</Spin>
						</div>
					</Card>
				</Col>
				<Col lg={17} md={24}>
					<Card
						bordered={false}
						tabList={operationTabList}
						onTabChange={this.onTabChange}
						loading={false}
					>
						{this.props.children}
					</Card>
				</Col>
			</Row>
		);
	}

	onTabChange = (key) => {
		switch (key) {
			case 'articles':
				RouterUtils.push('Articles');
				break;
			case 'applications':
				RouterUtils.push('Applications');
				break;

			case 'projects':
				RouterUtils.push('Projects');
				break;
		}
	};
}

const styles = {
	container: {},
	avatar_holder: {
		textAlign: 'center',
		marginBottom: Dimens.d24,
	},
	avatar_img: {
		width: Dimens.d104,
		height: Dimens.d104,
	},
	avatar_name: {
		fontSize: Dimens.d20,
		lineHeight: Dimens.d56,
		fontWeight: '500',
		color: Themes.font_color,
		marginBottom: Dimens.d4
	},
	detail_p: {
		marginBottom: Dimens.d8,
		paddingLeft: Dimens.d26,
		position: 'relative',
	},
	tags: {
		marginBottom: Dimens.d12
	},
	title: {
		fontWeight: '500',
		color: Themes.font_color_black,
		marginBottom: Dimens.d12
	},
	tag: {
		marginBottom: Dimens.d12
	},
	tag_plus: {
		background: '#fff',
		borderStyle: 'dashed',
		marginBottom: Dimens.d12
	}
};

export default UserCenterPage;
