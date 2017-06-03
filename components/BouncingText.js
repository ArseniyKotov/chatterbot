import React from 'react';
import { Animated, StyleSheet, View, Text } from 'react-vr';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 1.5,
    transform: [{translate: [0, 0.7, -3]}],
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  text: {
    border: 0.5,
    borderRadius: 0.05, 
    fontSize: 0.1,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'lightblue'
  }
});


class BouncingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
      key: true
    };
  }

  componentDidMount() {
    
    if(this.state.key === true){
    this.setState({key: false});
    Animated.spring(this.state.bounceValue, {
      toValue: 2,
      friction: 1,
      tension: 4,
    }).start()
    
  } 
  else if(this.state.key === false){
    console.log("WOO");
      Animated.spring(this.state.bounceValue, {
      toValue: 2,
      friction: 1,
      tension: 4,
    }).start()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.text, { transform: [{ scale: this.state.bounceValue }]}]}>
          {this.props.theText}
        </Animated.Text>
      </View>
    );
  }
}

export default BouncingText;