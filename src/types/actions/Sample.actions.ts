
export const SAMPLE_TEST = "SAMPLE_TEST";

export interface SampleTestActions {
  type: typeof SAMPLE_TEST;
  payload: number;
};

export type SampleActionType =
  | SampleTestActions;