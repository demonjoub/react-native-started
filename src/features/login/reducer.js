import { ADD_PLACE } from '../../constans/types';

const initialState = {
  placeName: '',
  places: []
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
}

export default loginReducer;
