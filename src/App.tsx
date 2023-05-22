import useRoute from './hoc/useRoute'

function App() {
  const routeElement = useRoute()
  return <div>{routeElement}</div>
}

export default App
