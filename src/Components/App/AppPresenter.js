import React from 'react';
import Header from 'Components/Header';
import Flex from 'styled-flex-component';
import Notification from 'Components/Notification';
import GlobalStyles from 'Components/GlobalStyles';
import Store from 'store';

const AppPresenter = () => {
    return (
        <>
            <Header />
            <Flex alignCenter full column>
                <Store.Consumer>
                    {store => {
                        return Object.keys(store.notifications).map(key => (
                            <Notification
                                key = {store.notifications[key].id}
                                id = {store.notifications[key].id}
                                text = {store.notifications[key].text}
                                seen = {store.notifications[key].seen}
                            />
                        ))
                    }}
                </Store.Consumer>
            </Flex>
            <GlobalStyles />
        </>
    )
};

export default AppPresenter;
