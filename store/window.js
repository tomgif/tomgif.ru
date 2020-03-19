export const state = () => ({
  isMobile: false
});

export const mutations = {
  set: (state, payload) => state.isMobile = payload.value,
};
