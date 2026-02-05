import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type GalleryImage = {
  src: string; // e.g. "/articles/realtime-chat-app/ggc.jpg"
  alt?: string;
  title?: string;
  description?: string;
};

interface PhotoGalleryProps {
  images: GalleryImage[];
}

const PhotoGallery = ({ images }: PhotoGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
          break;
        case "ArrowRight":
          e.preventDefault();
          setSelectedIndex((selectedIndex + 1) % images.length);
          break;
        case "Escape":
          e.preventDefault();
          setSelectedIndex(null);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  if (images.length === 0) return null;

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image.src}
              alt={image.alt || image.title || `Gallery image ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              onClick={() => openLightbox(index)}
              loading="lazy"
            />

            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-30" : "opacity-0"
              }`}
            />

            {image.title && (
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="font-semibold">{image.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 bg-white/80 hover:bg-white rounded-full p-3 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close lightbox"
          >
            <X size={24} className="text-black" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} className="text-black" />
          </button>

          <div className="flex flex-col items-center gap-6 w-full h-full justify-center max-w-5xl">
            <div className="relative flex-1 w-full flex items-center justify-center">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt || images[selectedIndex].title || "Gallery image"}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            <div className="w-full text-center">
              {images[selectedIndex].title && (
                <p className="text-white text-xl font-semibold mb-2">
                  {images[selectedIndex].title}
                </p>
              )}
              {images[selectedIndex].description && (
                <p className="text-gray-300 text-sm mb-3 max-w-2xl mx-auto">
                  {images[selectedIndex].description}
                </p>
              )}
              <p className="text-gray-400 text-sm">
                {selectedIndex + 1} of {images.length}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Use arrow keys to navigate • ESC to close
              </p>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next image"
          >
            <ChevronRight size={28} className="text-black" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
