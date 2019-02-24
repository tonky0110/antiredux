import React from 'react';
import NotificationPresenter from './NotificationPresenter';

class NotificationContainer extends React.Component {
	static propTypes = {};
	state = {};
	render() {
		return <NotificationPresenter {...this.props} {...this.state} />;
	}
}

export default NotificationContainer;
