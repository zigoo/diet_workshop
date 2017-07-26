export default function setSelected(typ) {
  console.log(typ)
  return {
   type: 'SELECTED',
   typ
  }
}
