import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {setUsername} from '../Actions/setUsername';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import MainContainer from '../Components/MainContainer';

interface HomeProps {
  navigation: any;
  username: any;
  setUsername: any;
}

interface HomeState {
  username: string;
  error: boolean;
  errorMessage: string;
}

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      username: '',
      error: false,
      errorMessage: '',
    };
  }

  onClickSave = () => {
    if (this.state.username !== null && this.state.username !== '') {
      this.props.setUsername(this.state.username);
      this.props.navigation.navigate('ButtonsScreen');
    } else {
      this.setState({error: true, errorMessage: 'Username is empty'});
    }
  };

  onClickClear = () => {
    this.setState({error: false, errorMessage: ''});
  };

  render() {
    return (
      <MainContainer>
        <View style={styles.container}>
          <Header navigation={this.props.navigation} title="Home" />
          <TextInput
            style={styles.textInput}
            placeholder={'Enter name'}
            // tslint:disable-next-line:jsx-no-lambda
            onChangeText={text => this.setState({username: text})}
            value={this.state.username}
          />
          <Text style={styles.errorMessage}>
            {this.state.error ? this.state.errorMessage : null}
          </Text>
          <CustomButton
            title="Save Name"
            onPress={this.onClickSave}
            backgroundColor="grey"
            isBackgroundColorAvailable={true}
          />
          <CustomButton title="Clear" onPress={this.onClickClear} />
        </View>
      </MainContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#c0c2c4',
    marginHorizontal: 30,
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#e1e3e6',
    width: '80%',
  },
  errorMessage: {
    color: '#ff0000',
    marginHorizontal: 30,
  },
});

const mapStateToProps = (state: any) => {
  return {
    username: state.user.username,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUsername: (text: any) => dispatch(setUsername(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
