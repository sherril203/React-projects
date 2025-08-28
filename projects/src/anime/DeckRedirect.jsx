// DeckRedirect.jsx
import { useParams, Navigate } from "react-router";

const DeckRedirect = () => {
  const { id } = useParams();
  return <Navigate to={`/decks/${id}`} replace />;
};

export default DeckRedirect;
