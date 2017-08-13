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

export function sendEatenMeal(id=1,ateDate) {
  return {
    type:'eatenMeal',
    id,
    ateDate
  };
}

export function setCollapse(id,collapsed) {
  return {
    type:'isCollapsed',
    id,
    collapsed
  };
}

export function setVisible(id) {
  return {
    type:'isVisible',
    id
  };
}

export function removeVisible(id) {
  return {
    type:'removeVisible',
    id
  };
}