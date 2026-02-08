import "./style.css";
import ImageCard from "./components/imagecard";
import { galleryData } from "./data/gallerydata";

function App() {
  return (
    <>
      <div className="app">
        <h1 className="heading">Dynamic Image Gallery</h1>
        <div className="gallery">
          {galleryData.map((item) => (
            <ImageCard
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
