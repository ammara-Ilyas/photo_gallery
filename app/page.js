import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
export default function Home() {
  return (
    <div className="App">
      <header className="">
        <h1 className="text-5xl font-bold mt-16 text-center">Image Gallery</h1>
        <ImageGallery />
      </header>
    </div>
  );
}
