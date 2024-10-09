import React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface CellProps {
  children: React.ReactNode;
  height: number;
  width: number;
}

export const Cell = ({height, width, children}: CellProps) => {
  return (
    <View style={[styles.cellContainer, {height, width}]}>{children}</View>
  );
};
