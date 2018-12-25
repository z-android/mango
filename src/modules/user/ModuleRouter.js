/**
 * Created by zhongzihuan on 2018/11/15.
 * 模块路由表作用
 */
import React from 'react';
import { Route } from 'dva/router';
import { MangoUtils } from '../../mango-web';

import UserEntryPage from './pages/entry/UserEntryPage';
import UserEntryModel from './pages/entry/UserEntryModel';
import ModuleModel from './ModuleModel';
import UserCenterPage from './pages/user_center/UserCenterPage';
import UserInfoPage from './pages/user_info/UserInfoPage';
import UserCenterModel from './pages/user_center/UserCenterModel';
import Articles from './pages/user_center/fragments/Articles';
import Applications from './pages/user_center/fragments/Applications';
import Projects from './pages/user_center/fragments/Projects';

const ModuleRouter = (props) => {
	// console.log("模块路由栈："+JSON.stringify(props))
	const {match, app} = props;

	MangoUtils.registerModel(app, ModuleModel);

	return (
		<div>

			{/*用户中心界面*/}
			<Route
				path={`${match.path + '/UserCenterPage'}`}
				render={(props) => (
					<UserCenterPage>
						<Route
							path={`${match.path + '/UserCenterPage/Articles'}`}
							render={(props) => (<Articles/>)}
						/>
						<Route
							path={`${match.path + '/UserCenterPage/Applications'}`}
							render={(props) => (<Applications/>)}
						/>
						<Route
							path={`${match.path + '/UserCenterPage/projects'}`}
							render={(props) => (<Projects/>)}
						/>
					</UserCenterPage>
				)}
				registerModel={MangoUtils.registerModel(app, UserCenterModel)}
			/>

			<Route
				exact
				path={`${match.path + '/user-entry'}`}
				component={UserEntryPage}
				registerModel={MangoUtils.registerModel(app, UserEntryModel)}
			/>


			<Route
				exact
				path={`${match.path + '/UserInfoPage'}`}
				component={UserInfoPage}
			/>


		</div>
	);
};

const RouterUser = {
	login: '/user/user-entry',
};

export { RouterUser, ModuleRouter };





