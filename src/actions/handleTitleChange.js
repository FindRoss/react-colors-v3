export function handleTitleChange(payload, state) {
  const { id, title } = payload;

  const newArray = [...state.palettes];
  const index = newArray.findIndex(pal => pal.id === id);
  const newArrayItem = { ...newArray[index], title }
  newArray[index] = newArrayItem;

  return newArray;
}
