export default function setSelected(typ,selectedId) {
  return {
   type: 'SELECTED',
   	typ,
   	selectedId
  }
}
