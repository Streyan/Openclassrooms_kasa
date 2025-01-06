import { Link } from "react-router";

function ErrorMessage() {
  return (
    <div className="flex-column error-message">
      <h2 className="error-message_title">404</h2>
      <h3 className="error-message_subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h3>
      <Link to="/">
        <p className="error-message_link">Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
}

export default ErrorMessage;
