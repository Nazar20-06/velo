import { useParams, Navigate } from "react-router-dom";

const Catalog = () => {
  const { type } = useParams();

  if (type === "city") {
    return <Navigate to="/catalog/city" replace />;
  }

  if (type === "mountain") {
    return <Navigate to="/catalog/mountain" replace />;
  }

  if (type === "electric") {
    return <Navigate to="/catalog/electric" replace />;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Каталог: Невідома категорія</h1>
      <p>Спробуйте вибрати одну з доступних категорій.</p>
    </div>
  );
};

export default Catalog;
