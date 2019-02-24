import React from 'react';
import HeaderPresenter from './HeaderPresenter';

class HeaderContainer extends React.Component {
	static propTypes = {};
	state = {};

	render() {
		return <HeaderPresenter {...this.state} />;
	}
}

export default HeaderContainer;
