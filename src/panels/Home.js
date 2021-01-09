import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon28UserAddOutline from '@vkontakte/icons/dist/28/user_add_outline';
import Icon28HistoryForwardOutline from '@vkontakte/icons/dist/28/history_forward_outline';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import bridge from '@vkontakte/vk-bridge'

import {
    CellButton,
    FixedLayout,
    HorizontalScroll,
    Input,
    Placeholder,
    Spinner,
    RichCell,
    Separator,
    Header,
    Card,
    CardGrid,
    Title,
    Search,
    PanelSpinner,
    Link,
    Snackbar,
    Subhead,
    PanelHeaderButton,
    Alert,
    FormLayout
} from "@vkontakte/vkui";

const blueBackground = {
backgroundColor: 'var(--accent)'
};

const redBackground = {
  backgroundColor: '#ff0000'
};

class HomePanelBase extends React.Component {}

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
 <PanelHeader left={<PanelHeaderButton style={{ cursor: 'pointer' }}><Icon28HistoryForwardOutline/></PanelHeaderButton>}>Склонятор</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
		</Group>}
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
