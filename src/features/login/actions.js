import { ADD_PLACE } from './../../constans/types'

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}
