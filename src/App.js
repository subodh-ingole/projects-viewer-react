import Header from "./components/Header";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  console.log(data);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header />
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                description={item.description}
                github={item.github}
                deployment={item.deployment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
