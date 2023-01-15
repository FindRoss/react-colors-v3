export const handleAddPane = (payload, state) => {
  const { id, newColor } = payload;

  const newColorArr = [{ hex: newColor }];

  const copyPalettes = [...state.palettes];
  const indexPalette = copyPalettes.findIndex(pal => pal.id === id);

  const copyPalette = { ...copyPalettes[indexPalette] }
  const newColors = copyPalette.colors.concat(newColorArr);

  const newPalette = { ...copyPalette, colors: newColors }
  copyPalettes[indexPalette] = newPalette

  return copyPalettes;

}