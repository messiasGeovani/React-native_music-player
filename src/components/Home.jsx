import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Button, Text, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import metrics from '../utils/metrics';

const DATA = [
  {
    thumb:
      'https://i.pinimg.com/236x/b6/c0/fb/b6c0fbb07ab5d3a060af92758564a32d--sims-glitches-funny-sims.jpg',
    title: 'First Item',
  },
  {
    thumb:
      'https://i.pinimg.com/236x/b6/c0/fb/b6c0fbb07ab5d3a060af92758564a32d--sims-glitches-funny-sims.jpg',
    title: 'Second Item',
  },
  {
    thumb:
      'https://i.pinimg.com/236x/b6/c0/fb/b6c0fbb07ab5d3a060af92758564a32d--sims-glitches-funny-sims.jpg',
    title: 'Third Item',
  },
];

const styles = StyleSheet.create({
  container: {
    width: metrics.windowWidth,
    height: metrics.windowHeight,
  },
});

const SongCard = ({ title, thumb }) => (
  <View>
    <Image
      source={{ uri: thumb }}
      style={{ width: 200, height: 200 }}
      PlaceholderContent={<ActivityIndicator />}
    />
    <Text>{title}</Text>
  </View>
);

export default function Home() {
  const renderItem = ({ item }) => (
    <SongCard title={item.title} thumb={item.thumb} />
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Button title="Back" />
          <Button title="options" />
        </View>

        <View>
          <View>
            <Text>Artist</Text>
            <Text>Rhye</Text>
          </View>

          <Button title="play" />
        </View>

        <View>
          <View>
            <View>
              <Text>Songs</Text>
              <Text>112</Text>
            </View>

            <View>
              <Text>Songs</Text>
              <Text>112</Text>
            </View>

            <View>
              <Text>Songs</Text>
              <Text>112</Text>
            </View>
          </View>

          <View>
            <Text>Popular</Text>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={() => Math.random()}
              horizontal
            />
          </View>

          <View>
            <Text>Albums</Text>

            <View>
              <Image
                source={{
                  uri:
                    'https://i.pinimg.com/236x/b6/c0/fb/b6c0fbb07ab5d3a060af92758564a32d--sims-glitches-funny-sims.jpg',
                }}
                style={{ width: 200, height: 200 }}
              />

              <View>
                <Text>Spirit Remixed</Text>
                <Text>2019</Text>
              </View>

              <Icon name="ios-person" size={30} color="#4F8EF7" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
