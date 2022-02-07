import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  navigation: any;
  title: string;
  iconsShow?: boolean;
}

interface HeaderState {}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.largeTitle, styles.title]}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    height: 60,
  },
  title: {
    marginTop: 15,
    marginLeft: 30,
    fontSize: 22,
    fontWeight: 'bold',
  },
  largeTitle: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'bold',
  },
});

export default Header;
