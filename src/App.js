import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <div className="container">
        <div className="py-2 my-1 fs-1 text-center">WebTItle!</div>

        <div className="d-flex justify-content-around">
          <button type="button" class="btn align-self-center btn-danger fs-1">
            &#9747;
          </button>
          <Card classess={'my-5'}></Card>
          <button type="button" class="btn align-self-center btn-success fs-1">
            &#10003;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
