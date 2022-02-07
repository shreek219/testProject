import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';

const data = ['Slide me to continue'];

interface ButtonsScreenProps {
  navigation: any;
  username: any;
}

interface ButtonsScreenState {}

class ButtonsScreen extends Component<ButtonsScreenProps, ButtonsScreenState> {
  constructor(props: ButtonsScreenProps) {
    super(props);
  }

  onClickButton1 = () => {
    this.props.navigation.navigate('DetailsScreen', {buttonNumber: '1'});
  };

  onClickButton2 = () => {
    this.props.navigation.navigate('DetailsScreen', {buttonNumber: '2'});
  };

  onClickButton3 = () => {
    this.props.navigation.navigate('DetailsScreen', {buttonNumber: '3'});
  };

  onClickButton4 = () => {
    this.props.navigation.navigate('DetailsScreen', {buttonNumber: 'Swipe'});
  };

  LeftSwipeActions = () => {
    return (
      <View style={styles.swipeRowBlock}>
        <Text style={styles.swipeRow}>You swiped the button</Text>
      </View>
    );
  };

  renderItem = ({item}: any) => {
    return (
      <Swipeable
        renderLeftActions={this.LeftSwipeActions}
        onSwipeableLeftOpen={this.onClickButton4}>
        <View style={styles.row}>
          <Icon name="diamond" size={40} style={styles.icon} />
          <Text style={{flex: 2}}>{item}</Text>
        </View>
      </Swipeable>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={this.props.navigation} title="List of Buttons" />
        <View style={styles.textBlock}>
          <Text style={styles.username}>Username: {this.props.username}</Text>
        </View>
        <View style={styles.textBlock}>
          <Text>4 variations of a button</Text>
        </View>
        <CustomButton title="Press me" onPress={this.onClickButton1} />
        <CustomButton
          title="Press me"
          onPress={this.onClickButton2}
          isBackgroundColorAvailable={true}
          backgroundColor="#c0c2c4"
          titleColor="#0098d9"
        />
        <CustomButton
          title="Press me"
          onPress={this.onClickButton3}
          isBackgroundColorAvailable={true}
          backgroundColor="#0098d9"
          titleColor="#ffffff"
        />
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBlock: {
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  username: {
    fontSize: 24,
    color: '#0000ff',
    fontWeight: 'bold',
  },
  row: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
    backgroundColor: '#c0c2c4',
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    marginLeft: 5,
  },
  swipeRow: {
    color: '#40394a',
    paddingHorizontal: 10,
    fontWeight: '600',
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  swipeRowBlock: {
    flex: 1,
    backgroundColor: '#ccffbd',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state: any) => {
  return {
    username: state.user.username,
  };
};

export default connect(mapStateToProps)(ButtonsScreen);
