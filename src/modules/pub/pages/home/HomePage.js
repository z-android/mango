/**
 * Created by mangyan on 2018/12/10.
 * 首页
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';

import DocumentTitle from 'react-document-title';
import { MangoUtils } from '../../../../mango-web';

import { enquireScreen, unenquireScreen } from 'enquire-js';

@connect(({user}) => ({user}))
class HomePage extends PureComponent {

	componentDidMount() {
		console.log('首页' + JSON.stringify(this.props));
		MangoUtils.dispatch(this, 'user', 'onFetchCurrentUser', {});

		//检查当前的设备模式
		this.enquireHandler = enquireScreen(mobile => {
			MangoUtils.dispatch(this, 'app', 'pureUpdateScreen', {mobile: mobile});
		});
	}

	componentDidUpdate() {
		console.log();
	}

	componentWillUnmount() {
		//清除设备监听
		unenquireScreen(this.enquireHandler);
	}

	render() {
		return (
			<DocumentTitle title={'首页'}>
				<div>
					我是首页
				</div>
			</DocumentTitle>
		);
	}

	getPageTitle = () => {

	};
}

const styles = {};

export default HomePage;
