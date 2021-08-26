import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Error from "./components/Error";
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>hello, world</h1>
      </Container>
    </>
  );
}

export default App;
