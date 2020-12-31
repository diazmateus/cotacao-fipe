const mapOptionsToSelect = (array) => {
  return array.map((value) => ({
    value: value.codigo,
    label: value.nome
  }))
}

export {
  mapOptionsToSelect
}
