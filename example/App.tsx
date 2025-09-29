import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Markdown from 'react-native-markdown-display';

const md = `
| Col 1 | Col 2 | Col 3 | Col 4 | Col 5 | Col 6 | Col 7 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |
`;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Markdown enableTableHorizontalScroll tableMinColumnWidth={120}>
          {md}
        </Markdown>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});

export default App;
