import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LogementDetail() {
  const { propertyKey } = useParams<{ propertyKey: string }>();

  useEffect(() => {
    const lang = "fr";
    const iframeUrl = `https://app.superhote.com/#/rental/${propertyKey}?lang=${lang}`;

    const iframe = document.getElementById('propertyengine') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframeUrl;
    }
  }, [propertyKey]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-4 text-center">
            Détails du logement
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Découvrez toutes les informations et réservez directement
          </p>
        </div>
      </section>

      {/* SuperHote Property Detail */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="relative w-full">
            <iframe 
              id="propertyengine"
              className="w-full border-0 rounded-lg shadow-card"
              style={{ display: 'block', minHeight: '1200px' }}
              src=""
              width="100%"
              height="3879"
              allowFullScreen
              sandbox="allow-scripts allow-forms allow-same-origin allow-presentation allow-top-navigation"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
