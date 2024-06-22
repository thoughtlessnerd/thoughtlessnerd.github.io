import "./App.css";
import NoisyBg from "./components/NoisyBg";

function App() {
  return (
    <>
      <NoisyBg />
      <section className="w-full h-full flex justify-center items-center absolute top-0 left-0 p-8">
        <section className="corner-border w-full h-full flex flex-col gap-3 border border-dashed items-center justify-between">
          <nav className="w-full flex justify-between">
            <div className="styled-font text-3xl items-center">AC</div>
            <div className="flex items-center gap-4">
              <button className="w-full h-full text-nowrap px-4">
                Projects
              </button>
              <button className="bg-red-700 rounded-full w-full h-full px-8 py-2 text-nowrap">
                Let's talk
              </button>
            </div>
          </nav>
          <div className=" flex flex-col gap-12 items-center mx-36">
            <h1 className="styled-font text-8xl">
              Abhay
              <br /> &nbsp;&nbsp;&nbsp;&nbsp; Chauhan
            </h1>
            <p className="text-xl leading-loose text-center font-light">
              Lorem <span className="styled-font">Top 0.5%</span> ipsum dolor
              sit amet consectetur adipisicing elit. Inventore hic maiores{" "}
              <span className="styled-font">Top 0.5%</span> harum praesentium,
              ipsum voluptas consectetur ratione dolore quia perspiciatis est
              facilis blanditiis impedit similique reiciendis officia dolor!
              Harum reiciendis nobis praesentium, minima numquam dolorem.
            </p>
          </div>

          <div className="bg-red-200 w-full h-[300px]">{/* gallery */}</div>

          <footer className="flex justify-between items-center w-full">
            <ul className="flex gap-6 text-xl uppercase">
              <li>Github</li>
              <li>Linkedin</li>
              <li>Email</li>
            </ul>
            <p>&copy; {new Date().getFullYear()}</p>
          </footer>
        </section>
      </section>
    </>
  );
}

export default App;
