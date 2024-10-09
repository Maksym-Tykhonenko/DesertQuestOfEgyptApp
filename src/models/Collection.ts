import {ImageSourcePropType} from 'react-native';
import {
  bag,
  brush,
  compass,
  crown,
  egypt,
  flag,
  fossil,
  hammer,
  liquid,
  loop,
  map,
  necklace,
  picture,
  plate,
  shovel,
  vase,
  x2,
} from '../assets';

export interface CollectionItem {
  id: number;
  name: string;
  locked: boolean;
  icon: ImageSourcePropType;
}

export const collection: CollectionItem[] = [
  {id: 1, name: 'Map', icon: map, locked: true},
  {id: 2, name: 'Compass', icon: compass, locked: true},
  {id: 3, name: 'Hammer', icon: hammer, locked: true},
  {id: 4, name: 'Picture', icon: picture, locked: true},
  {id: 5, name: 'Vase', icon: vase, locked: true},
  {id: 6, name: 'Egypt', icon: egypt, locked: true},
  {id: 7, name: 'Bag', icon: bag, locked: true},
  {id: 8, name: 'Loop', icon: loop, locked: true},
  {id: 9, name: 'Crown', icon: crown, locked: true},
  {id: 10, name: 'Liquid', icon: liquid, locked: true},
  {id: 11, name: 'Fossil', icon: fossil, locked: true},
  {id: 12, name: 'Necklace', icon: necklace, locked: true},
  {id: 13, name: 'Brush', icon: brush, locked: true},
  {id: 14, name: 'Plate', icon: plate, locked: true},
  {id: 15, name: 'Shovel', icon: shovel, locked: true},
  {id: 16, name: 'Flag', icon: flag, locked: true},
];

export const itemsCollection: CollectionItem[] = [
  {id: 1, name: 'Picture', icon: picture, locked: true},
  {id: 2, name: 'Compass', icon: compass, locked: true},
  {id: 3, name: 'x2', icon: x2, locked: true},
  {id: 4, name: 'Picture', icon: picture, locked: true},
  {id: 5, name: 'Picture', icon: picture, locked: true},
  {id: 6, name: 'Loop', icon: loop, locked: true},
  {id: 7, name: 'Compass', icon: compass, locked: true},
  {id: 8, name: 'Compass', icon: compass, locked: true},
  {id: 9, name: 'x2', icon: x2, locked: true},
  {id: 10, name: 'Vase', icon: vase, locked: true},
  {id: 11, name: 'Egypt', icon: egypt, locked: true},
  {id: 12, name: 'Bag', icon: bag, locked: true},
  {id: 13, name: 'Vase', icon: vase, locked: true},
  {id: 14, name: 'Egypt', icon: egypt, locked: true},
  {id: 15, name: 'Bag', icon: bag, locked: true},
  {id: 16, name: 'Loop', icon: loop, locked: true},
  {id: 17, name: 'Vase', icon: vase, locked: true},
  {id: 18, name: 'Egypt', icon: egypt, locked: true},
  {id: 19, name: 'Bag', icon: bag, locked: true},
  {id: 20, name: 'Loop', icon: loop, locked: true},
];
