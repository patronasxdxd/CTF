import { Navbar, Welcome ,Box,Vote,Propose,Excecute,Faucet} from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    <div className="flex">
    <Faucet/>
    <Propose />
    <Vote />
    <Excecute />
    </div>
    <Box />
    </div>

  </div>
);

export default App;
