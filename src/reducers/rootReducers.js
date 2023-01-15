import { UPDATE_PANE, UPDATE_TITLE, ADD_NEW, DELETE_PANE, ADD_PANE } from '../actions/types'
import { handleTitleChange } from '../actions/handleTitleChange'
import { handlePaneColorChange } from '../actions/handlePaneColorChange'
import { handleDeletePane } from '../actions/handleDeletePane';
import { handleAddPane } from '../actions/handleAddPane';

const initialState = {
  palettes: [
    {
      title: 'Test',
      id: '5426432',
      colors: [
        {
          hex: "#2C5CAE"
        },
        {
          hex: "#0E0AB1"
        }
      ]
    },
    {
      title: 'Another one',
      id: '42336331',
      colors: [
        {
          hex: "#CCCCCC"
        },
        {
          hex: "#262626"
        },
        {
          hex: "#DDDDDD"
        }
      ]
    }
  ]
}


export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PANE:
      return {
        ...state,
        palettes: handlePaneColorChange(payload, state)
      }
    case UPDATE_TITLE:
      return {
        ...state,
        palettes: handleTitleChange(payload, state)
      }
    case ADD_NEW:
      return {
        ...state,
        palettes: state.palettes.concat(payload)
      }
    case DELETE_PANE:
      return {
        ...state,
        palettes: handleDeletePane(payload, state)
      }
    case ADD_PANE:

      return {
        ...state,
        palettes: handleAddPane(payload, state)
      }
    default:
      return state;
  }
}