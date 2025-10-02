import { Link } from "react-router-dom";

export default function FooterLegal() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-foreground">Informations Légales</h4>
      <ul className="space-y-2 text-sm">
        <li><Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">Mentions Légales</Link></li>
        <li><Link to="/cgv" className="text-muted-foreground hover:text-primary transition-colors">Conditions Générales</Link></li>
        <li><Link to="/confidentialite" className="text-muted-foreground hover:text-primary transition-colors">Politique de Confidentialité</Link></li>
      </ul>
    </div>
  );
}
