import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import Header from '../Components/Header';
import MainContainer from '../Components/MainContainer';

interface DetailsScreenProps {
  navigation: any;
  username: any;
  route: any;
}

interface DetailsScreenState {}

class DetailsScreen extends Component<DetailsScreenProps, DetailsScreenState> {
  constructor(props: DetailsScreenProps) {
    super(props);
  }

  render() {
    return (
      <MainContainer>
        <View style={styles.container}>
          <Header
            navigation={this.props.navigation}
            title="Button Details Screen"
          />
          <View style={styles.textBlock}>
            <Text style={styles.username}>Username: {this.props.username}</Text>
          </View>
          <View style={styles.textBlock}>
            <Text>
              You pressed the button {this.props.route.params.buttonNumber}
            </Text>
          </View>
        </View>
      </MainContainer>
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
});

const mapStateToProps = (state: any) => {
  return {
    username: state.user.username,
  };
};

export default connect(mapStateToProps)(DetailsScreen);
