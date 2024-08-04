import React, { useState } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import Voice from '@react-native-community/voice';

const VoiceAssistant = () => {
  const [result, setResult] = useState('');

  Voice.onSpeechResults = (e) => {
    setResult(e.value[0]);
  };

  const startListening = () => {
    Voice.start('en-US');
  };

  const stopListening = () => {
    Voice.stop();
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>{result}</Text>
      <Button title="Start Listening" onPress={startListening} />
      <Button title="Stop Listening" onPress={stopListening} />
    </SafeAreaView>
  );
};

export default VoiceAssistant;
