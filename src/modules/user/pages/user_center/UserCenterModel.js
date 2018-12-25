/**
 * Created by mangyan on 2018/12/25.
 */
export default {
  namespace: 'user_center',
  state: {
    //标签输入框是否显示
    inputVisible: false,
    //标签输入框输入的内容
    inputValue: '',
    //标签输入新标签
    newTags: [],
    //loading
    projectLoading:false,
  },

  reducers: {

    //控制标签输入框的显示
    pureShowInput(state, action) {
      return {
        ...state,
        inputVisible: !state.inputVisible
      };
    },

    //记录标签输入值
    pureInputChange(state, action) {
      const {inputValue} = action.payload;
      return {
        ...state,
        inputValue: inputValue
      };
    },

    //标签输入确定
    pureInputConfirm(state, action) {
      let newTags = state.newTags;
      if (state.inputValue && state.newTags.filter(tag => tag.label === state.inputValue).length === 0) {
        newTags = [...newTags, {key: `new-${newTags.length}`, label: state.inputValue}];
      }
      return {
        ...state,
        newTags: newTags,
        inputVisible: false,
        inputValue: ''
      };
    },

  },

  effects: {},

  subscriptions: {}
};
