import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

import styles from './{__kebabCaseName__}-styles';

class {__pascalCaseName__} extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the {__pascalCaseName__} component</Text>
      </View>
    );
  }
}

export default {__pascalCaseName__};
