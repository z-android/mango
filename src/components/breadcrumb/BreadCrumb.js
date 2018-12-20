/**
 * Created by mangyan on 2018/12/20.
 */
import React, { PureComponent } from 'react';

import { Breadcrumb } from 'antd';

export default class BreadCrumb extends PureComponent {

	static defaultProps = {};

	static propTypes = {};

	constructor(props) {
		super(props);
	}

	render() {
		const {separator, breadcrumbList} = this.props;
		return (
			<Breadcrumb style={styles.container} separator={separator}>
				{
					breadcrumbList.map(item => {
						<a>{item.title}</a>;
					})
				}
			</Breadcrumb>
		);
	}

}

const styles = {
	container: {}
};
