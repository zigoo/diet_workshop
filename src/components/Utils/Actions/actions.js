export default function setSelected(typ, selectedId) {
  return {
    type: 'SELECTED',
    typ,
    selectedId
  };
}

export function sendDateToStore(day = 1) {
  return {
    type: 'SELECTED_DATE',
    day
  };
}

export function setPath(path) {
  return {
    type:'PATH',
    path
  };
}