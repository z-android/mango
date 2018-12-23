/**
 * Created by mangyan on 2018/12/10.
 * 首页
 * 功能处理
 * （1）识别设备屏幕，更新布局
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';

import DocumentTitle from 'react-document-title';
import { Dimens, MangoUtils } from '../../../../mango-web';
import { Layout, Menu, Icon } from 'antd';

import { enquireScreen, unenquireScreen } from 'enquire-js';

import SliderMenu from './components/SliderMenu';
import HeaderView from './components/HeaderView';

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
						<HeaderView/>
						{/*内容区域*/}
						<Content style={{
							margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
						}}>
							Content
						</Content>
					</Layout>
				</Layout>
			</DocumentTitle>
		);
	}

}

const styles = {};

export default HomePage;
