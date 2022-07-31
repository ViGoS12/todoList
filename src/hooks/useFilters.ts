const useFilters = (todos: Todo[], filter: number) => {
  switch (filter) {
    case 0:
      return todos
    case 1:
      return todos.filter((e) => e.completed === false)
    case 2:
      return todos.filter((e) => e.completed === true)
    default:
      return todos
  }
}

export default useFilters
