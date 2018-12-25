/**
 * Created by mangyan on 2018/12/25.
 */
import React, { PureComponent } from 'react';

export default class Projects extends PureComponent {

	static defaultProps = {};

	static propTypes = {};

	constructor(props) {
		super(props);
	}

	render() {
		const {} = this.props;
		return (
			<div style={styles.container}>
				Projects
			</div>
		);
	}

}

const styles = {
	container: {}
};
