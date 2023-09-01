import { Navbar, Welcome ,Box,Vote,Propose,Excecute,Faucet} from "./components";

const App = () => (
  <div className="min-h-screen" >
    <div className=""  style={{
        backgroundImage: 'url("https://i.pinimg.com/originals/59/db/f3/59dbf3658e096e5793c88384aa4b6063.jpg")',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        minHeight: '100vh', // Set a minimum height to cover the viewport
      }}>
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
