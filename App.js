import * as React from 'react';
import { StyleSheet, SafeAreaView,Button } from 'react-native';
import { NodeCameraView } from 'react-native-nodemediaclient';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      publishBtnTitle: 'Start Publish',
      isPublish: true
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NodeCameraView 
          style={{ height: '100%' }}
          ref={(vb) => { this.vb = vb }}
          outputUrl = {"rtmp://192.168.0.108/live/STREAM_NAME"}
          camera={{ cameraId: 1, cameraFrontMirror: true }}
          audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
          video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
          autopreview={true}
        />
        <Button
          onPress={() => {
              if (this.state.isPublish) {
                this.setState({ publishBtnTitle: 'Start Publish', isPublish: false });
                this.vb.stop();
              } else {
                this.setState({ publishBtnTitle: 'Stop Publish', isPublish: true });
                this.vb.start();
              }
            }}
            title={this.state.publishBtnTitle}
            color="#841584"
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});