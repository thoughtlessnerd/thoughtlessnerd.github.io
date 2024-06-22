import "./NoisyBg.css";

const NoisyBg = () => {
  return (
    <section className="w-full min-h-[100vh] bg-stone-900 relative flex justify-center">
      <div className="w-[1600px] h-[800px] bg-radial-grad rounded-full blur-3xl -translate-y-1/4"></div>
      <div className="noise w-full h-full absolute top-0 left-0" />
    </section>
  );
};

export default NoisyBg;
