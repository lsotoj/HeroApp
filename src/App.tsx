import LogoHeros from "./components/LogoHeros";
import Search from "./components/Search/Search";
import General from "./screens/General";
import Liked from "./screens/Liked";

function App() {
  return (
    <div className="w-full h-screen bg-bgStartrack text-white pt-4 px-16 pb-6">
      <LogoHeros />
      <Liked />
      <Search />
      <General />
    </div>
  );
}

export default App;
