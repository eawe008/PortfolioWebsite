import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import PhotoGallery from "./components/photogallery";
import { ARTICLES, type Article, type GalleryImage } from "./data/articles";

const Writeup = () => {
  const { slug } = useParams<{ slug: string }>();

  const article: Article | null = useMemo(() => {
    if (!slug) return null;
    return ARTICLES.find((a) => a.slug === slug) ?? null;
  }, [slug]);

  const images: GalleryImage[] = article?.gallery ?? [];

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  if (!slug || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">Article not found</p>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to portfolio
        </Link>

        <article className="animate-fade-in">
          {article.featuredImage && (
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
              loading="lazy"
            />
          )}

          <header className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{article.title}</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} />
              <time dateTime={article.createdAt}>{formatDate(article.createdAt)}</time>
            </div>
          </header>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">{article.description}</p>

          <div className="prose prose-lg max-w-none mb-12">
            {article.content
              .replace(/\\n/g, "\n")
              .split("\n")
              .map((line, idx) => {
                if (line.startsWith("# ")) {
                  return (
                    <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                      {line.replace("# ", "")}
                    </h2>
                  );
                }
                if (line.startsWith("## ")) {
                  return (
                    <h3 key={idx} className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                      {line.replace("## ", "")}
                    </h3>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li key={idx} className="text-gray-700 ml-6 mb-2">
                      {line.replace("- ", "")}
                    </li>
                  );
                }
                if (line.trim()) {
                  const cleanedText = line
                    .replace(/\*\*(.*?)\*\*/g, "$1")
                    .replace(/\*(.*?)\*/g, "$1")
                    .replace(/\\(.)/g, "$1");
                  return (
                    <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                      {cleanedText}
                    </p>
                  );
                }
                return null;
              })}
          </div>

          {images.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
              <PhotoGallery images={images} />
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default Writeup;
