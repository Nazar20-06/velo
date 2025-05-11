import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const electricBikes = [
  {
    id: 1,
    image: "https://i.ibb.co/HfFCV1PZ/2025-05-08-235244.png",
    price: "700 грн / день",
    description: "Стильний електровелосипед з потужним мотором для швидких поїздок містом без зусиль. Комфорт та ефективність.",
  },
  {
    id: 2,
    image: "https://i.ibb.co/9HC8hxTy/2025-05-08-235540.png",
    price: "1000 грн / день",
    description: "Преміум електровелик з великим запасом ходу. Ідеальний для далеких маршрутів із мінімальним навантаженням.",
  }
];

export default function ElectricBikesList() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Електровелосипеди</h1>
      <div className="space-y-8">
        {electricBikes.map((bike) => (
          <div
            key={bike.id}
            className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={bike.image}
              alt={`Електровелосипед ${bike.id}`}
              className="w-full md:w-1/3 h-auto object-cover"
            />
            <div className="p-6 md:w-2/3">
              <h2 className="text-2xl font-bold text-primary mb-2">{bike.price}</h2>
              <p className="text-muted-foreground mb-4">{bike.description}</p>
              <Link to={`/rent/electric/${bike.id}`}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Орендувати
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
