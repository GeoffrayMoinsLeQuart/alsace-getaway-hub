import { Facebook, Instagram } from "lucide-react";

export default function FooterCompany() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold font-['Playfair_Display'] text-foreground">
        Clefs d'Alsace
      </h3>
      <p className="text-muted-foreground text-sm">
        Votre conciergerie alsacienne pour des séjours d'exception à Mulhouse, Colmar et Saint-Louis.
      </p>
      <div className="flex gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
