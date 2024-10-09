import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Cell, Header} from '../../components';
import {COLLECTION} from '../../const';
import LinearGradient from 'react-native-linear-gradient';
import {lock} from '../../assets';
import {useCollectionStore} from '../../store/useCollectionStore';
import {CollectionItem} from '../../models/Collection';
import {styles} from './styles';

export const Collection = () => {
  const collection = useCollectionStore(state => state.collection);
  const renderItem = ({item}: {item: CollectionItem}) => (
    <>
      {item.locked ? (
        <Cell height={80} width={80}>
          <Image source={lock} resizeMode="contain" />
        </Cell>
      ) : (
        <LinearGradient style={styles.item} colors={['#EB1800', '#FD6D0A']}>
          <Image source={item.icon} resizeMode="contain" />
        </LinearGradient>
      )}
    </>
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.mainContainer}>
        <Header />
        <Text style={styles.title}>{COLLECTION}</Text>
      </View>
      <FlatList
        data={collection}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
        columnWrapperStyle={styles.row}
        style={styles.list}
      />
    </SafeAreaView>
  );
};
