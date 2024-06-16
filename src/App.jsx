import GetApi from "./components/GetApi.jsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h1 className="text-center fw-bold">
              Como usar el Hook useFetch <hr />
            </h1>
            <GetApi />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
