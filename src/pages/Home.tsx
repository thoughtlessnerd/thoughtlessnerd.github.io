import IndexedSection from "../Components/IndexedSection";
import Section from "../Components/Section";
import Nav from "../Components/Nav";
import StylishButton from "../Components/StylishButton";
import AbstractLines from "../Components/AbstractLines";
import Colors from "../Colors";
import "../css/Home.css";

const Home: React.FC = () => {
  return (
    <>
      <Nav />;
      <IndexedSection
        style={{
          marginTop: "100px",
        }}
        indexed={false}
        className="indexedSection"
        direction="column"
        count={1}
      >
        <Section className="heroSection">
          <h1>
            Hello, I'm
            <br />a Front end Developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure
            nostrum architecto repudiandae.
          </p>
          <StylishButton className="heroButton" styleType="default">
            Button
          </StylishButton>
          <AbstractLines
            className="heroLinesBG"
            lineWidth={(idx) => {
              // return 200 + 100 * Math.sin(idx / (2 * Math.PI));
              return 20 * Math.sqrt(500 - Math.pow(idx - Math.sqrt(500), 2));
            }}
            centerHorizontally={true}
            centerVertically={true}
            lineHeight={5}
            borderRadius={10}
            lineColor={`linear-gradient(to right, ${Colors.theme_c2}, ${Colors.light_c1})`}
            gap={5}
            count={50}
            direction="column"
            styleType="default"
          />
        </Section>
      </IndexedSection>
    </>
  );
};

export default Home;
