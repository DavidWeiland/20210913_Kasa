import Banner from './Banner'
import Body from'./Body'
import Footer from './Footer'
import '../styles/App.css'


function App() {
  document.title = `kasa`

  return (
    <div>
      <Banner />
      <div className="app-display">
        <Body />
      </div>
      <Footer />
    </div>
  )
}

export default App;
