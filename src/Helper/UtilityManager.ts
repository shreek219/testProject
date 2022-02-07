import DeviceInfo from 'react-native-device-info';

export const isSimulator = () => {
  return DeviceInfo.isEmulator();
};

export const deviceInfo = () => {
  return DeviceInfo.getModel();
};
