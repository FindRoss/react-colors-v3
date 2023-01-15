export function handlePaneColorChange(payload, state) {
  const { id, index, randomColor } = payload;

  const newArray = [...state.palettes];
  const arrIndex = newArray.findIndex(pal => pal.id === id);

  const paletteObjCopy = { ...state.palettes[arrIndex] };

  const colorsArrCopy = [...paletteObjCopy.colors];

  colorsArrCopy.map((color, i) => {
    if (i === index) {
      color.hex = randomColor;
    };
    return color;
  });

  const updatedArray = newArray.map((item, i) => {
    if (i === arrIndex) {
      item = paletteObjCopy
    }

    return item;
  });

  return updatedArray;
}
