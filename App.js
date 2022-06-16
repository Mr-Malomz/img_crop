import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textPrimary}>Daniel James</Text>
      <View>
        {/* original */}
        <Image
          style={styles.galleryPrimary}
          source={{
            uri: 'https://res.cloudinary.com/dtgbzmpca/image/upload/v1655382189/Man_1.jpg',
          }}
        />
        {/* circular crop */}
        {/* <Image
          style={styles.galleryPrimary}
          source={{
            uri: 'https://res.cloudinary.com/dtgbzmpca/image/upload/w_300,h_300,c_fill,ar_1:1,g_auto,r_max/v1655382189/Man_1.jpg',
          }}
        /> */}
        {/* square crop */}
        {/* <Image
          style={styles.galleryPrimary}
          source={{
            uri: 'https://res.cloudinary.com/dtgbzmpca/image/upload/w_300,h_300,c_fill,ar_1:1,g_auto,r_20/v1655382189/Man_1.jpg',
          }}
        /> */}
      </View>
    </View>
  );
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  textPrimary: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },

  galleryPrimary: {
    height: 400,
    width: '100%',
    resizeMode: 'cover',
    margin: 2,
  },
});
