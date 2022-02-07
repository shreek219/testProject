import React, {Component} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {getStatusBarHeight} from 'react-native-status-bar-height';

interface CustomSafeAreaViewProps {
  notchPadding?: boolean;
  homeIndicator?: boolean;
}

interface CustomSafeAreaViewState {}

export default class CustomSafeAreaView extends Component<
  CustomSafeAreaViewProps,
  CustomSafeAreaViewState
> {
  constructor(props: CustomSafeAreaViewProps) {
    super(props);
    this.state = {};
  }

  render() {
    if (Platform.OS == 'ios') {
      return (
        <KeyboardAvoidingView
          style={[
            style.container,
            this.props.notchPadding && style.notchPadding,
            this.props.homeIndicator && style.homeIndicatorMargin,
          ]}
          behavior={'padding'}>
          {this.props.children}
        </KeyboardAvoidingView>
      );
    } else {
      return <View style={style.container}>{this.props.children}</View>;
    }
  }
}

const homeIndicatorHeight =
  Platform.OS == 'ios' && DeviceInfo.hasNotch() ? 35 : 0;

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  notchPadding: {
    paddingTop: getStatusBarHeight(),
  },
  homeIndicatorMargin: {
    marginBottom: homeIndicatorHeight,
  },
});
