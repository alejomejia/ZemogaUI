import { action } from 'easy-peasy';
import data from '../data/votegrid.json';

const model = {
  // State
  votebox: {
    thumbUp: 0,
    thumbDown: 0,
  },
  figures: data,
  alert: {
    show: false,
    msg: '',
  },
  // Actions
  handleVotebox: action((state, payload) => {
    if (payload === 'up') {
      state.votebox.thumbUp += 1;
    } else if (payload === 'down') {
      state.votebox.thumbDown += 1;
    } else {
      console.error(
        'Action error: votation - You need to choose between "up" or "down" payload',
      );
    }
  }),
  handleVotation: action((state, payload) => {
    state.figures.map((figure) => {
      let mod;

      if (figure.id === payload.id) {
        if (payload.thumb === 'up') {
          mod = figure.thumbsUp += 1;
        } else if (payload.thumb === 'down') {
          mod = figure.thumbsDown += 1;
        }
      }

      return mod;
    });
  }),
  handleAlert: action((state, payload) => {
    state.alert = { ...payload };
  }),
};

export default model;
