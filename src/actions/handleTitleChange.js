export function handleTitleChange(payload, state) {
  const { id, title } = payload;

  const newArray = [...state.palettes];
  const index = newArray.findIndex(pal => pal.id === id);
  // same as... const newArrayItem = Object.assign({}, newArray[index], { title })
  const newArrayItem = { ...newArray[index], title }
  newArray[index] = newArrayItem;

  return newArray;
}
