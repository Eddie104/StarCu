'use strict';

import React, { PureComponent } from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Image,
	ImageBackground,
} from 'react-native';

import { toDips, getFontSize } from '../utils/dimensions';

export default class MissionItem extends PureComponent {

	constructor(props) {
		super(props);
	}

	onItemPress(missionId) {
		const {navigate} = this.props.navigation;
		navigate({
			routeName: 'MissionDetailScene',
			params: {
				missionId,
			},
		});
	}

	render() {
		const { item } = this.props;
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => {
					this.onItemPress(item.key);
				}}
				style={styles.itemContainer}
			>
				<View style={styles.itemInfoContainer}>
					<ImageBackground style={styles.itemStatusImgBg} source={require('../imgs/huangk.png')}>
						<Image style={styles.itemStatusImg} source={require('../imgs/wwc.png')} />
						<Text style={styles.itemStatusTxt}>
							未完成
						</Text>
					</ImageBackground>
					<View style={styles.itemInfoSubContainer}>
						<Text style={styles.name}>
							{ item.name }
						</Text>
						<Text style={styles.category}>
							{ item.category }
						</Text>
						<View style={styles.itemDateRow}>
							<Image style={styles.clockImg} source={require('../imgs/clock.png')} />
							<Text style={styles.date}>
								{ item.time }
							</Text>
						</View>
					</View>
				</View>
				<Image style={styles.arrowImg} source={require('../imgs/jt.png')} />
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		width: toDips(750),
		height: toDips(180),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 1,
		backgroundColor: 'white',
	},
	itemInfoContainer: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	itemStatusImgBg: {
		width: toDips(194),
		height: toDips(151),
		marginLeft: toDips(34),
		alignItems: 'center',
	},
	itemStatusTxt: {
		fontSize: getFontSize(26),
		fontWeight: '500',
		color: 'white',
		marginTop: toDips(11),
	},
	itemStatusImg: {
		width: toDips(48),
		height: toDips(48),
		marginTop: toDips(25),
	},
	itemInfoSubContainer: {
		marginLeft: toDips(36),
	},
	name: {
		color: '#2A2A2A',
		fontSize: getFontSize(36),
		fontWeight: '500',
	},
	category: {
		color: '#9D9D9D',
		fontSize: getFontSize(30),
		fontWeight: '500',
		marginTop: toDips(19),
	},
	itemDateRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: toDips(19),
	},
	clockImg: {
		width: toDips(27),
		height: toDips(27),
		marginRight: toDips(7),
	},
	date: {
		color: '#969696',
		fontSize: getFontSize(24),
		fontWeight: '500',
	},
	arrowImg: {
		width: toDips(18),
		height: toDips(34),
		marginRight: toDips(46),
	},
});