import MySites from "./MyProjects/MySites"

const style = {
  bg:" w-full h-screen bg-gradient-to-r from-slate-500 via-yellow-900 to-gray-800 background-animate",
  header:"text-center p-4 text-white",
  div:"flex flex-col items-center text-white",
  button:"p-4 rounded-sm shadow-xl"
}

function App() {
  return (
    <div className={style.bg}>
    <header className={style.header}> Nath's Portfolio </header>
    <div className={style.div}>
    <button className={style.button}>Projects</button>
    </div>
    
    
    </div>
  );
}

export default App;
