import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Cell, Header} from '../../components';
import {COLLECT_ITEMS} from '../../const';
import LinearGradient from 'react-native-linear-gradient';
import {lock, tryAgain} from '../../assets';
import {CollectionItem, itemsCollection} from '../../models/Collection';
import {styles} from './styles';
import {useQuestStore} from '../../store/useQuestStore';

export const CollectItems = ({navigation}: any) => {
  const [items, setItems] = useState<CollectionItem[]>(itemsCollection);
  const [rightAnswerCount, setRightAnswerCount] = useState(0);
  const {score, setScore} = useQuestStore();
  const [scoreCount, setScoreCount] = useState(score);

  const pressCount = useRef<{[key: string]: number}>({});
  const lastPressedItem = useRef<string | null>(null);

  const handlePress = (id: number, itemName: string) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id && item.locked) {
          const newItem = {...item, locked: false};

          if (itemName === lastPressedItem.current) {
            pressCount.current[itemName] =
              (pressCount.current[itemName] || 0) + 1;
          } else {
            pressCount.current[itemName] = 1;
          }

          lastPressedItem.current = itemName;

          if (pressCount.current[itemName] === 3) {
            setRightAnswerCount(prevCount => prevCount + 1);
            setScoreCount(prevScore => prevScore + 100);

            pressCount.current[itemName] = 0;
          }

          return newItem;
        }
        return item;
      }),
    );
  };

  const handleTryAgain = useCallback(() => {
    setItems(prevItems => prevItems.map(item => ({...item, locked: true})));
    setRightAnswerCount(0);
    setScore(scoreCount);
    pressCount.current = {};
    lastPressedItem.current = null;
  }, [scoreCount, setScore]);

  useEffect(() => {
    if (items.every(item => !item.locked)) {
      navigation.navigate('collectComplete', {
        rightAnswerCount,
        score: rightAnswerCount * 100,
      });
    }
  }, [items, rightAnswerCount, score, navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      handleTryAgain();
    });

    return unsubscribe;
  }, [handleTryAgain, navigation]);

  const renderItem = ({item}: {item: CollectionItem}) => (
    <TouchableOpacity
      onPress={() => handlePress(item.id, item.name)}
      activeOpacity={0.5}>
      {item.locked ? (
        <Cell height={80} width={80}>
          <Image source={lock} resizeMode="contain" />
        </Cell>
      ) : (
        <LinearGradient style={styles.item} colors={['#EB1800', '#FD6D0A']}>
          <Image source={item.icon} resizeMode="contain" />
        </LinearGradient>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header />
          <Text style={styles.title}>{COLLECT_ITEMS}</Text>
        </View>
        <LinearGradient
          colors={['#fffa8a', '#ecc440']}
          style={styles.listContainer}>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={4}
            columnWrapperStyle={styles.row}
            style={styles.list}
            scrollEnabled={false}
            contentContainerStyle={styles.content}
          />
        </LinearGradient>

        <TouchableOpacity onPress={handleTryAgain} style={styles.button}>
          <Image source={tryAgain} resizeMode="contain" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
