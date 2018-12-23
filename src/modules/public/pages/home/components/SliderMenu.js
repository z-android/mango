/**
 * Created by mangyan on 2018/12/23.
 * 垂直菜单，子菜单内嵌在菜单区域
 * 侧边导航
 * 要使用自定义触发器，可以设置 trigger={null} 来隐藏默认设定。
 */
import React, { Component } from 'react';
import { connect } from 'dva';

import { Menu, Icon, Layout } from 'antd';
import { Dimens } from '../../../../../mango-web';
import Themes from '../../../../../assets/Theme';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const {Sider} = Layout;

@connect(({app}) => ({app}))
class SliderMenu extends Component {

	render() {

		const {collapsed} = this.props.app;

		return (

			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
			>
				<div style={styles.logo}/>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
					{/*Dashboard*/}
					<SubMenu
						key="dashboard"
						title={<span><Icon type="user"/><span>Dashboard</span></span>}
					>
						<Menu.Item key="dashboard_1">分析页</Menu.Item>
						<Menu.Item key="dashboard_2">监控页</Menu.Item>
						<Menu.Item key="dashboard_3">工作台</Menu.Item>
					</SubMenu>

					{/*表单页*/}
					<SubMenu
						key="form"
						title={<span><Icon type="user"/><span>表单页</span></span>}
					>
						<Menu.Item key="form_1">基础表单</Menu.Item>
						<Menu.Item key="form_2">分步表单</Menu.Item>
						<Menu.Item key="form_3">高级表单</Menu.Item>
					</SubMenu>

					{/*列表页*/}
					<SubMenu
						key="list"
						title={<span><Icon type="user"/><span>列表页</span></span>}
					>
						<Menu.Item key="list_1">查询表格</Menu.Item>
						<Menu.Item key="list_2">标准列表</Menu.Item>
						<Menu.Item key="list_3">卡片列表</Menu.Item>
						<SubMenu key="list_4" title="搜索列表">
							<Menu.Item key="list_4_1">文章</Menu.Item>
							<Menu.Item key="list_4_2">项目</Menu.Item>
							<Menu.Item key="list_4_3">应用</Menu.Item>
						</SubMenu>

					</SubMenu>

					{/*详情页*/}
					<SubMenu
						key="detail"
						title={<span><Icon type="user"/><span>详情页</span></span>}
					>
						<Menu.Item key="detail_1">基础详情页</Menu.Item>
						<Menu.Item key="detail_2">高级详情页</Menu.Item>
					</SubMenu>

					{/*结果页*/}
					<SubMenu
						key="result"
						title={<span><Icon type="user"/><span>结果页</span></span>}
					>
						<Menu.Item key="result_1">成功页</Menu.Item>
						<Menu.Item key="result_2">失败页</Menu.Item>
					</SubMenu>


					{/*异常页*/}
					<SubMenu
						key="error"
						title={<span><Icon type="user"/><span>异常页</span></span>}
					>
						<Menu.Item key="error_1">403</Menu.Item>
						<Menu.Item key="error_2">404</Menu.Item>
						<Menu.Item key="error_2">405</Menu.Item>
					</SubMenu>

					{/*个人页*/}
					<SubMenu
						key="user"
						title={<span><Icon type="user"/><span>个人页</span></span>}
					>
						<Menu.Item key="user_1">个人中心</Menu.Item>
						<Menu.Item key="user_2">个人设置</Menu.Item>
					</SubMenu>

				</Menu>
			</Sider>
		);
	}
}

const styles = {
	container: {},
	logo: {
		height: Dimens.d32,
		backgroundColor: Themes.bg_color,
		margin: Dimens.d16
	},
};

export default SliderMenu;
