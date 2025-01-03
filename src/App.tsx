import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import styles from './AppStyles';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>ECTS:{count}</Text>
      <Button title="Click!" onPress={() => setCount(count + 1)}></Button>

      <StatusBar style="auto" />
    </View>
  );
}

