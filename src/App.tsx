import LogoHeros from "./components/LogoHeros";
import Search from "./components/Search";
import General from "./screens/General/Index";
import Liked from "./screens/Liked";

function App() {
  return (
    <div className="w-full h-full bg-bgStartrack text-white pt-4 px-16 pb-6">
      <LogoHeros />
      <Liked />
      <Search />
      <General />
    </div>
  );
}

export default App;
