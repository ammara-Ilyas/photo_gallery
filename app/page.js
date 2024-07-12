import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold mb-8">Image Gallery</h1>
        <ImageGallery />
      </header>
    </div>
  );
}
