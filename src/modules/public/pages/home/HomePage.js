/**
 * Created by mangyan on 2018/12/10.
 * 首页
 * 功能处理
 * （1）识别设备屏幕，更新布局
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';

import DocumentTitle from 'react-document-title';
import { Layout, Menu, Icon } from 'antd';
import Authorized from 'ant-design-pro/lib/Authorized';

import { Dimens, MangoUtils, RouterUtils } from '../../../../mango-web';

import { enquireScreen, unenquireScreen } from 'enquire-js';

import SliderMenu from './components/SliderMenu';
import HeaderView from './components/HeaderView';
import Themes from '../../../../assets/Theme';

const {Content} = Layout;

@connect(({home, user, app}) => ({home, user, app}))
class HomePage extends PureComponent {

	// 构造
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {isMobile} = this.props.app;
		MangoUtils.dispatch(this, 'user', 'onFetchCurrentUser', {});

		//检查当前的设备模式
		this.enquireHandler = enquireScreen(mobile => {
			if (isMobile !== mobile) {
				MangoUtils.dispatch(this, 'app', 'pureUpdateScreen', {mobile: mobile});
			}
		});
	}

	componentDidUpdate(preProps) {

		const {isMobile, collapsed} = this.props.app;

		if (isMobile && !preProps.isMobile && collapsed) {
			//菜单缩放成移动设备屏幕
			MangoUtils.dispatch(this, 'app', 'pureChangeLayoutCollapsed', {collapsed: false});
		}

	}

	componentWillUnmount() {
		//清除设备监听
		unenquireScreen(this.enquireHandler);
	}

	render() {
		return (
			<DocumentTitle title={'首页'}>
				<Layout style={{display: 'flex', height: Dimens.fill_height}}>
					<SliderMenu/>
					{/*顶部*/}
					<Layout>
						<HeaderView
							onMenuClick={this.onMenuClick}
						/>
						{/*内容区域*/}
						<Content style={{
							margin: Dimens.d24,
							minHeight: 280,
						}}>

							{this.props.children}
						</Content>
					</Layout>
				</Layout>
			</DocumentTitle>
		);
	}

	onMenuClick = (event) => {
		const {key} = event;
		switch (key) {
			case 'user_center':
				RouterUtils.push('UserCenterPage');
				break;
			case 'user_info':
				RouterUtils.push('UserInfoPage');
				break;
			case 'logout':
				break;
		}
	};

}

const styles = {};

export default HomePage;
