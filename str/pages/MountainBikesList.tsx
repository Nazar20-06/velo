import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const mountainBikes = [
  {
    id: 1,
    image: "https://i.ibb.co/3mkW9phz/2025-05-08-234310.png",
    price: "450 грн / день",
    description: "Потужний гірський велосипед з амортизаторами для впевнених спусків і бездоріжжя. Ідеальний вибір для екстремалів.",
  },
  {
    id: 2,
    image: "https://i.ibb.co/Zp4S5gFQ/2025-05-08-234436.png",
    price: "500 грн / день",
    description: "Міцна рама, дискові гальма і широкі покришки — усе для комфортної їзди горами. Надійність і контроль у кожному повороті.",
  }
];

export default function MountainBikesList() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Гірські велосипеди</h1>
      <div className="space-y-8">
        {mountainBikes.map((bike) => (
          <div
            key={bike.id}
            className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={bike.image}
              alt={`Гірський велосипед ${bike.id}`}
              className="w-full md:w-1/3 h-auto object-cover"
            />
            <div className="p-6 md:w-2/3">
              <h2 className="text-2xl font-bold text-primary mb-2">{bike.price}</h2>
              <p className="text-muted-foreground mb-4">{bike.description}</p>
              <Link to={`/rent/mountain/${bike.id}`}>
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
