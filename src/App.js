import { useState, useEffect } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { getNews } from "./services/getNews";
function App() {
  useEffect(() => {
    const fetchTechNews = async () => {
      const res = await getNews({
        searchQuery: "microsoft",
      });
      console.log(res);
    };
    fetchTechNews();
  }, []);
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
