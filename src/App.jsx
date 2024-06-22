import "./App.css";
import NoisyBg from "./components/NoisyBg";

function App() {
  return (
    <>
      <NoisyBg />
      <section className="w-full min-h-[100vh] flex flex-col gap-3 justify-center items-center absolute top-0 left-0">
        <h1 className="text-6xl font-bold styled-font">Abhay Chauhan</h1>
        <p>Software Developer</p>
      </section>
    </>
  );
}

export default App;
