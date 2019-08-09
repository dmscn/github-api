export default (initialState: any) => (reduceMap: any) => (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const reducer = reduceMap[action.type]
  return reducer ? reducer(state, action) : state
}
