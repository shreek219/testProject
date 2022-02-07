import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress?: any;
  isBackgroundColorAvailable?: boolean;
  backgroundColor?: string;
  titleColor?: string;
}

interface CustomButtonState {}

class CustomButton extends Component<CustomButtonProps, CustomButtonState> {
  constructor(props: CustomButtonProps) {
    super(props);
  }

  render() {
    const {
      titleColor = '#000000',
      title,
      isBackgroundColorAvailable = false,
      backgroundColor,
    } = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.container,
          isBackgroundColorAvailable ? {backgroundColor} : null,
        ]}
        onPress={this.props.onPress}>
        <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomButton;
