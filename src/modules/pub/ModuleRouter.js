/**
 * Created by zhongzihuan on 2018/11/15.
 * 模块路由表作用
 */
import React from 'react';
import { Route } from 'dva/router';
import { MangoUtils } from '../../mango-web';
import HomePage from './pages/home/HomePage';
import UserModel from '../user/ModuleModel';

const ModuleRouter = (props) => {
	// console.log("模块路由栈："+JSON.stringify(props))
	const {match, app} = props;

	MangoUtils.registerModel(app, UserModel);

	return (
		<div>
			<Route
				exact
				path={`${match.path + '/home'}`}
				component={HomePage}
			/>
		</div>
	);
};

export { ModuleRouter };





