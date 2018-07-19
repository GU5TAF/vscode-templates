import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

import styles from './{__kebabCaseName__}-styles';

const propTypes = {};

const defaultProps = {};

function {__pascalCaseName__}(props) {
  return (
    <View style={styles.container}>
      <Text>I'm the {__pascalCaseName__} component</Text>
    </View>
  );
}

{__pascalCaseName__}.propTypes = propTypes;
{__pascalCaseName__}.defaultProps = defaultProps;

export default {__pascalCaseName__};
