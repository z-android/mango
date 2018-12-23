/**
 * Created by mangyan on 2018/12/23.
 * 界面头  使用Layout布局，协助进行页面级整体布局
 * （1）组件的定位,界面的菜单，Layout布局中的Header
 * （2）功能包含：对slider的控制，站内搜索，使用文档、消息、用户信息操作、国际化语言操作
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';

import { Icon, Layout, Menu, Tooltip, Dropdown, Avatar } from 'antd';

import { HeaderSearch, NoticeIcon } from 'ant-design-pro';

import { Dimens, MangoUtils } from '../../../../../mango-web';
import Strings from '../../../Strings';
import Themes from '../../../../../assets/Theme';

const {Header} = Layout;

@connect(({app}) => ({app}))
class HeaderView extends PureComponent {

	render() {
		const {collapsed} = this.props.app;
		return (
			<Header style={{
				background: Themes.bg_color_white,
				padding: 0,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between'
			}}>
				<Icon
					style={styles.trigger}
					type={collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={() => MangoUtils.dispatch(this, 'app', 'pureChangeSliderCollapsed')}
				/>
				{/*头部右侧导航*/}
				{this.renderRight()}
			</Header>
		);

	}

	renderRight = () => {

		let noticeData = this.getNoticeData();

		const {onNoticeClear, onNoticeVisibleChange, fetchingNotices} = this.props.app;

		let currentUser = {notifyCount: 11};

		return (
			<div style={styles.menu_right}>
				{/*顶部搜索框*/}
				<HeaderSearch
					style={styles.menu_right_menu}
					placeholder={Strings.placeholder_search}
					onSearch={value => {
						console.log('input', value); // eslint-disable-line
					}}
					onPressEnter={value => {
						console.log('enter', value); // eslint-disable-line
					}}
				/>

				{/*文字提示*/}
				<Tooltip title="帮助">
					<a
						target="_blank"
						href="https://pro.ant.design/docs/getting-started"
						rel="noopener noreferrer"
						style={styles.menu_right_menu}
					>
						<Icon type="question-circle-o"/>
					</a>
				</Tooltip>

				{/*通知菜单*/}
				<NoticeIcon
					count={currentUser.notifyCount}
					onItemClick={(item, tabProps) => {
						console.log(item, tabProps); // eslint-disable-line
					}}
					locale={{
						emptyText: '暂无数据',
						clear: '清空',
					}}
					onClear={onNoticeClear}
					onPopupVisibleChange={onNoticeVisibleChange}
					loading={fetchingNotices}
					popupAlign={{offset: [20, -16]}}
					clearClose
				>
					<NoticeIcon.Tab
						list={noticeData.notification}
						title="通知"
						name="notification"
						emptyText={'你已查看完所有消息'}
						emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
					/>
					<NoticeIcon.Tab
						list={noticeData.message}
						title={'消息'}
						name="message"
						emptyText={'你已读完所有消息'}
						emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
					/>
					<NoticeIcon.Tab
						list={noticeData.event}
						title={'代办'}
						name="event"
						emptyText={'你已完成所有代办'}
						emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
					/>
				</NoticeIcon>

				{/*个人中心——下拉菜单*/}
				<Dropdown overlay={this.renderUserMenu()}>
					<span style={{marginRight: Dimens.d24, marginLeft: Dimens.d24}}>
					  <Avatar
						  size="small"
						  style={styles.menu_right_avatar}
						  src={currentUser.avatar}
						  alt="avatar"
					  />
					  <span className={styles.name}>{'芒言'}</span>
					</span>
				</Dropdown>

				{/*个人中心——选择语言*/}
				<Dropdown overlay={this.renderLangMenu()} placement="bottomRight">
					<span style={styles.menu_right_menu}>
					  <Icon
						  type="global"
						  title="语言"
					  />
					</span>
				</Dropdown>


			</div>

		);
	};

	/**
	 * 语言选择列表菜单
	 * @returns {*}
	 */
	renderLangMenu = () => {
		return (
			<Menu style={styles.menu_dropdown} selectedKeys={[]} onClick={this.onMenuClick}>
				<Menu.Item key="zh-CN">
					  <span role="img" aria-label="简体中文">
						🇨🇳
					  </span>{' '}
					简体中文
				</Menu.Item>
				<Menu.Item key="zh-TW">
					  <span role="img" aria-label="繁体中文">
						🇭🇰
					  </span>{' '}
					繁体中文
				</Menu.Item>
				<Menu.Item key="en-US">
					  <span role="img" aria-label="English">
						🇬🇧
					  </span>{' '}
					English
				</Menu.Item>
				<Menu.Item key="pt-BR">
					  <span role="img" aria-label="Português">
						🇵🇹
					  </span>{' '}
					Português
				</Menu.Item>
			</Menu>
		);
	};

	/**
	 * 个人中心设置
	 * @returns {*}
	 */
	renderUserMenu = () => {
		return (
			<Menu style={styles.menu_dropdown} selectedKeys={[]} onClick={this.onMenuClick}>
				<Menu.Item key="userCenter">
					<Icon type="user"/>
					个人中心
				</Menu.Item>
				<Menu.Item key="userinfo">
					<Icon type="setting"/>
					个人设置
				</Menu.Item>
				<Menu.Item key="triggerError">
					<Icon type="close-circle"/>
					触发报错
				</Menu.Item>
				<Menu.Divider/>
				<Menu.Item key="logout">
					<Icon type="logout"/>
					退出登录
				</Menu.Item>
			</Menu>
		);

	};

	/**
	 * 获取通知数据
	 */
	getNoticeData = () => {
		return {
			notification: [
				{
					id: '000000003',
					avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
					title: '这种模板可以区分多种通知类型',
					datetime: '2017-08-07',
					read: true,
					type: '通知',
				}
			],
			message: [
				{
					id: '000000008',
					avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
					title: '标题',
					description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
					datetime: '2017-08-07',
					type: '消息',
					clickClose: true,
				}
			],
			event: [
				{
					id: '000000012',
					title: 'ABCD 版本发布',
					description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
					extra: '进行中',
					status: 'processing',
					type: '待办',
				}
			],
		};
	};

	onMenuClick = () => {

	};

}

const styles = {
	trigger: {
		fontSize: Dimens.d18,
		lineHeight: Dimens.d64,
		paddingTop: 0,
		paddingLeft: Dimens.d24,
		cursor: 'pointer',
	},
	menu_right: {
		marginRight: Dimens.d16,
	},
	menu_right_menu: {
		marginRight: Dimens.d24,
	},
	menu_right_avatar: {
		marginTop: Dimens.d20,
		marginRight: Dimens.d8,
		marginBottom: Dimens.d20,
		verticalAlign: 'top',
		color: Themes.font_color
	},
	menu_dropdown: {
		marginTop: Dimens.d24
	},

};

export default HeaderView;
