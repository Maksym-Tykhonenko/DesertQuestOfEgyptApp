import {create} from 'zustand';
import {collection, CollectionItem} from '../models/Collection';

interface CollectionState {
  collection: CollectionItem[];
  unlockItem: (itemName: string) => void;
}

export const useCollectionStore = create<CollectionState>(set => ({
  collection: collection,
  unlockItem: (itemName: string) =>
    set(state => ({
      collection: state.collection.map(item =>
        item.name === itemName ? {...item, locked: false} : item,
      ),
    })),
}));
