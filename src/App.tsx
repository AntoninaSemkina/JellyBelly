import './App.css';
import Header from "./components/Header/"
import Card from "./components/Card"

function App() {
  return (
    <div className="container">
      <Header/>
      <Card title="Jelly Bob 1" image= "https://avatars.mds.yandex.net/i?id=6b105c66ca757dab387a13295ddd5787_l-5239122-images-thumbs&n=13"/>
      <Card title="Jelly Bob 1" image= "https://shopsweetiescandyaz.com/cdn/shop/files/f29cd6e0-1f7b-42c3-bda0-6c76ecaafdf7_512x512.jpg?v=1712446536"/>
    </div>
  )
}

export default App
