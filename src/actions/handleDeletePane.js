export const handleDeletePane = (payload, state) => {
  const { id, index } = payload;

  const copyPalettes = [...state.palettes];
  const indexPalette = copyPalettes.findIndex(pal => pal.id === id);
  const copyPalette = { ...copyPalettes[indexPalette] }
  const copyColor = [...copyPalette.colors];
  const filteredColors = copyColor.filter((c, i) => (i !== index));
  copyPalette.colors = filteredColors;
  copyPalettes[indexPalette] = copyPalette;

  return copyPalettes;
}
