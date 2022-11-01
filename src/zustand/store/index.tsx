import create from 'zustand';
import reducers from "../reducers";

export const store = create(() => (reducers));
