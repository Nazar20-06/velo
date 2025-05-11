import { useState } from "react";
import { useParams } from "react-router-dom";
import { differenceInDays } from "date-fns";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from "@/components/ui/button";

const bikes = {
  city: [
    {
      id: 1,
      image: "https://i.ibb.co/W4yM1T65/2025-05-08-233015.png",
      price: 250,
    },
    {
      id: 2,
      image: "https://i.ibb.co/0jDsLQqG/2025-05-08-233435.png",
      price: 300,
    },
  ],
  mountain: [
    {
      id: 3,
      image: "https://i.ibb.co/3mkW9phz/2025-05-08-234310.png",
      price: 450,
    },
    {
      id: 4,
      image: "https://i.ibb.co/Zp4S5gFQ/2025-05-08-234436.png",
      price: 500,
    },
  ],
  electric: [
    {
      id: 5,
      image: "https://i.ibb.co/HfFCV1PZ/2025-05-08-235244.png",
      price: 700,
    },
    {
      id: 6,
      image: "https://i.ibb.co/9HC8hxTy/2025-05-08-235540.png",
      price: 1000,
    },
  ],
};

const pickupLocations = [
  "Метро Лівобережна",
  "Метро Шулявська",
  "Метро Оболонь",
  "Метро Теремки",
  "Метро Харківська",
];

export default function RentalForm() {
  const { bikeId, type } = useParams();
  const bikeIndex = parseInt(bikeId || "1", 10) - 1;
  const bike = bikes[type as keyof typeof bikes]?.[bikeIndex];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState(pickupLocations[0]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [orderId, setOrderId] = useState<number | null>(null);

  const price = bike?.price || 0;
  const image = bike?.image;
  const days = startDate && endDate ? differenceInDays(endDate, startDate) + 1 : 0;
  const total = days * price;

  const handleSubmit = () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !startDate ||
      !endDate
    ) {
      alert("Будь ласка, заповніть усі поля та оберіть дати оренди.");
      return;
    }

    const id = Math.floor(Math.random() * 1000000);
    setOrderId(id);

    const order = {
      id,
      type,
      bikeId,
      image,
      price,
      firstName,
      lastName,
      phone,
      email,
      location,
      startDate: startDate?.toISOString(),
      endDate: endDate?.toISOString(),
      days,
      total,
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-10 text-center text-primary">Оформлення оренди</h1>

      <div className="mb-10">
        {image && (
          <img
            src={image}
            alt="Обраний велосипед"
            className="w-full max-h-[500px] object-cover rounded-lg shadow"
          />
        )}
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Ім'я"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Прізвище"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Номер телефону"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="font-semibold block mb-2">Оберіть місце видачі велосипеда:</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border p-2 rounded"
          >
            {pickupLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <p className="font-semibold mb-2">Дата початку оренди:</p>
            <Calendar date={startDate ?? new Date()} onChange={setStartDate} />
          </div>
          <div>
            <p className="font-semibold mb-2">Дата завершення оренди:</p>
            <Calendar date={endDate ?? new Date()} onChange={setEndDate} />
          </div>
        </div>

        {startDate && endDate && (
          <div className="mt-8 p-4 bg-green-50 border border-green-300 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-green-800 mb-1">
              Ви орендуєте велосипед на <strong>{days}</strong> дн{days === 1 ? "ь" : "і"}.
            </p>
            <p className="text-md text-green-700">
              Ціна за один день: <strong>{price} грн</strong>
            </p>
            <p className="text-md text-green-700">
              Загальна вартість: <strong className="text-green-900">{total} грн</strong>
            </p>
            <p className="text-md text-green-800 mt-2">
              Місце видачі: <strong>{location}</strong>
            </p>
          </div>
        )}

        <Button onClick={handleSubmit} className="mt-6 w-full bg-primary text-white text-lg py-3">
          Підтвердити оренду
        </Button>

        {orderId && (
          <div className="mt-6 text-center text-xl font-semibold text-green-600">
            ✅ Ваш номер замовлення: <span className="text-black">{orderId.toString().padStart(6, "0")}</span>
          </div>
        )}
      </div>
    </div>
  );
}
