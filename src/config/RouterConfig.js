/**
 * 路由表配置管理
 */
import React from 'react';
import { Router, Route, Switch, Link } from 'dva/router';

// user 模块
import { ModuleRouter as UserRouter } from '../modules/user';
import { ModuleRouter as PublicRouter } from '../modules/public';
import IndexPage from '../layouts/IndexPage';
import ErrorPage from '../layouts/ErrorPage';
import { MangoUtils, RouterUtils } from '../mango-web';
import HomePage from '../modules/public/pages/home/HomePage';

// import IndexPage from './IndexPage'

let appHistory = null;

const RouterConfig = ({history, app}) => {

	RouterUtils.history = history;

	//监听路由变化
	listenRouter(history);

	return (

		<Router history={history}>
			<Switch>

				<Route path="/" render={(props) => (
					<HomePage>
						{/*用户模块*/}
						<Route path="/user" render={(props) => (<UserRouter {...props} app={app}/>)}/>
					</HomePage>
				)}/>


				<Route exact path="/" component={IndexPage}/>


				{/*公共模块*/}
				<Route path="/public" render={(props) => (<PublicRouter {...props} app={app}/>)}/>

				{/*/!*Demo2模块*!/*/}
				{/*<Route path="/demo2" render={(props) => (<Demo2Router {...props} app={app}/>)}/>*/}

				{/*/!*用户管理模块*!/*/}
				{/*<Route path="/user" render={(props) => (<UserRouter {...props} app={app}/>)}/>*/}

				{/*/!*用户管理模块*!/*/}
				{/*<Route path="/life" render={(props) => (<LifeRouter {...props} app={app}/>)}/>*/}

				{/*/!*404界面*!/*/}
				{/*<Route component={() => {*/}
				{/*return (<h1>404</h1>)*/}
				{/*}}/>*/}

				{/*<Route exact path="/" render={(props) => (<PublicRouter {...props} app={app}/>)}/>*/}


				{/*<Route exact path="/home" render={(props) => {*/}
				{/*return (*/}
				{/*<HomePage {...props} app={app}>*/}
				{/*<div>*/}
				{/*<Route*/}
				{/*{...props}*/}
				{/*app={app}*/}
				{/*exact*/}
				{/*path={`${props.match.path + '/user-entry'}`}*/}
				{/*component={UserEntryPage}*/}
				{/*registerModel={MangoUtils.registerModel(app, UserEntryModel)}*/}
				{/*/>*/}

				{/*<Route*/}
				{/*{...props}*/}
				{/*app={app}*/}
				{/*exact*/}
				{/*path={'/home/user-center'}*/}
				{/*component={UserCenterPage}*/}
				{/*/>*/}

				{/*<Route*/}
				{/*{...props}*/}
				{/*app={app}*/}
				{/*exact*/}
				{/*path={`${props.match.path + '/user-info'}`}*/}
				{/*component={UserInfoPage}*/}
				{/*/>*/}
				{/*</div>*/}

				{/*</HomePage>*/}
				{/*);*/}
				{/*}}*/}

				{/*/>*/}


				{/*<Route path="/home" render={() =>*/}

				{/*<HomePage>*/}
				{/*<Switch>/!*Renders the first child <Route> or <Redirect> that matches the location.*!/*/}
				{/*用户模块*/}
				<Route path="/user" render={(props) => (<UserRouter {...props} app={app}/>)}/>

				{/*/!*公共模块*!/*/}
				{/*<Route path="/public" render={(props) => (<PublicRouter {...props} app={app}/>)}/>*/}
				{/*</Switch>*/}
				{/*</HomePage>*/}

				{/*}>*/}


				{/*</Route>*/}


				{/*Error界面*/}
				<Route path="/ErrorPage" component={ErrorPage}/>


			</Switch>
		</Router>
	);
};

function listenRouter(history) {
	history.listen((e) => {
		console.log('路由变化监听' + JSON.stringify(e) + '===' + JSON.stringify(history));
		//进行页面打点，路由得有文字关联
	});
}

export { RouterConfig, appHistory as history };

