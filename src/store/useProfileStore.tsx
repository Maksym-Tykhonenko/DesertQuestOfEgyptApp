import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';

interface ProfileState {
  profileName: string;
  setProfileName: (name: string) => void;
  avatarUri: string | null;
  setAvatarUri: (uri: string | null) => void;
  loadProfile: () => Promise<void>;
}

export const useProfileStore = create<ProfileState>(set => ({
  profileName: '',
  setProfileName: async (name: string) => {
    set({profileName: name});
    await AsyncStorage.setItem('profileName', name);
  },
  avatarUri: null,
  setAvatarUri: async (uri: string | null) => {
    set({avatarUri: uri});
    if (uri) {
      await AsyncStorage.setItem('avatarUri', uri);
    } else {
      await AsyncStorage.removeItem('avatarUri');
    }
  },
  loadProfile: async () => {
    const profileName = await AsyncStorage.getItem('profileName');
    const avatarUri = await AsyncStorage.getItem('avatarUri');
    if (profileName) {
      set({profileName});
    }
    if (avatarUri) {
      set({avatarUri});
    }
  },
}));
