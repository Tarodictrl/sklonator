import React, {Fragment} from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import './Intro.css';


const Intro = ({ id, snackbarError, fetchedUser, userHasSeenIntro, go}) => {
	return (
		<Panel id={id} centered={true}>
			<PanelHeader>
				Склонатор
			</PanelHeader>
			{(!userHasSeenIntro && fetchedUser) && 
			<Fragment>
				<Group>
					<Div className='User'>
						{fetchedUser.photo_200 && <Avatar src={fetchedUser.photo_200} />}
						<h2> Привет, {fetchedUser.first_name}! </h2>
						<h3> Этот сервис предназначен для склонения по падежам слов и словосочетаний.</h3>
					</Div>
				</Group>
				<FixedLayout vertical='bottom'>
					<Div>
						<Button mode='commerce' size='xl' onClick={go}>
							Продолжить
						</Button>
					</Div>
				</FixedLayout>
			</Fragment>
		}
		{snackbarError}
	</Panel>
	)
};


export default Intro;

