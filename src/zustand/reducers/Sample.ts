import { SampleActionType, SAMPLE_TEST } from "../../types/actions/Sample.actions";
import create from 'zustand';

const initialSample: {
  sampleTest: number;
} = {
  sampleTest: 0
}

const sampleReducers = (state = initialSample, action: SampleActionType) => {
  switch (action.type) {
    case SAMPLE_TEST:
      return {
        ...state,
        sampleTest: action.payload
      }
    default:
      return state;
  }
};

interface ISampleStore {
  sampleTest: number;
  updateSampleTest: (val: number) => void;
}

const useSampleStore = create<ISampleStore>((set) => ({
  ...initialSample,
  updateSampleTest: (args) => set((state) => sampleReducers(state, { type: SAMPLE_TEST, payload: args }))
}))

export default useSampleStore;
