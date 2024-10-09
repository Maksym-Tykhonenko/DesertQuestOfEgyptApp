import {create} from 'zustand';

interface QuestStore {
  score: number;
  rightAnswerCount: number;
  questCompleted: boolean;
  setScore: (newScore: number) => void;
  incrementRightAnswerCount: () => void;
  completeQuest: () => void;
}

export const useQuestStore = create<QuestStore>(set => ({
  score: 0,
  rightAnswerCount: 0,
  questCompleted: false,
  setScore: newScore => set({score: newScore}),
  incrementRightAnswerCount: () =>
    set(state => ({rightAnswerCount: state.rightAnswerCount + 1})),
  completeQuest: () => set({questCompleted: true}),
}));
