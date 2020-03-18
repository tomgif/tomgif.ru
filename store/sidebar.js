export const state = () => ({
  isToggled: false
});

export const mutations = {
  toggle: state => !state.isToggled,
  show: state => state.isToggled = true,
  hide: state => state.isToggled = false
};
