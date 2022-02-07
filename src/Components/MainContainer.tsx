import React, {Component} from 'react';
import {BackHandler, NativeEventSubscription} from 'react-native';
import NavigationManager from '../Helper/NavigationManager';
import CustomSafeAreaView from './CustomSafeAreaView';

interface MainContainerProps {
  avoidStatusBarIOS?: boolean;
  avoidBottomNavIOS?: boolean;
}

interface MainContainerState {}

export default class MainContainer extends Component<
  MainContainerProps,
  MainContainerState
> {
  static defaultProps: {
    avoidStatusBarIOS: boolean;
    avoidBottomNavIOS: boolean;
  };
  focusListener: NativeEventSubscription | undefined;

  constructor(props: MainContainerProps) {
    super(props);
    this.state = {};
  }
  handleBackButtonClick = () => {
    NavigationManager.goBack();

    return true;
  };

  componentWillUnmount() {
    this.focusListener?.remove();
  }
  componentDidMount() {
    this.focusListener = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }
  render() {
    return (
      <CustomSafeAreaView
        notchPadding={this.props.avoidStatusBarIOS}
        homeIndicator={this.props.avoidBottomNavIOS}>
        {this.props.children}
      </CustomSafeAreaView>
    );
  }
}

MainContainer.defaultProps = {
  avoidStatusBarIOS: true,
  avoidBottomNavIOS: true,
};
