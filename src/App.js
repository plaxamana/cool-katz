import SearchParams from "./components/SearchParams";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-300 to-purple-500 h-full min-h-full">
      <div className="container mx-auto max-w-screen-xl">
        <h1 className="text-4xl font-bold text-black text-center pt-8">
          Hang out with some Cool Catz!
        </h1>
        <SearchParams />
      </div>
    </div>
  );
}

export default App;
