import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className='h-screen w-full bg-cover bg-center bg-fixed bg-[url("https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2339009.jpg&fm=jpg")]'>
      <div className="bg-black/80 h-screen w-full">
        <Login />
      </div>
    </div>
  );
}

export default App;
