import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Order {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  location: string;
  startDate: string;
  endDate: string;
  days: number;
  price: number;
  total: number;
}

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("orders");
    if (stored) {
      try {
        setOrders(JSON.parse(stored));
      } catch {
        setOrders([]);
      }
    }
  }, []);

  const handleDelete = (id: number) => {
    const updated = orders.filter((o) => o.id !== id);
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
    setSelectedOrder(null);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">Мої замовлення</h1>

      {selectedOrder ? (
        <div className="bg-white rounded shadow p-6 max-w-xl mx-auto">
          <img
            src={selectedOrder.image}
            alt="bike"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <p><strong>Замовлення №:</strong> {selectedOrder.id}</p>
          <p><strong>Ім'я:</strong> {selectedOrder.firstName} {selectedOrder.lastName}</p>
          <p><strong>Телефон:</strong> {selectedOrder.phone}</p>
          <p><strong>Email:</strong> {selectedOrder.email}</p>
          <p><strong>Місце видачі:</strong> {selectedOrder.location}</p>
          <p><strong>Дата від:</strong> {new Date(selectedOrder.startDate).toLocaleDateString()}</p>
          <p><strong>Дата до:</strong> {new Date(selectedOrder.endDate).toLocaleDateString()}</p>
          <p><strong>Кількість днів:</strong> {selectedOrder.days}</p>
          <p><strong>Тариф:</strong> {selectedOrder.price} грн/день</p>
          <p><strong>До сплати:</strong> {selectedOrder.total} грн</p>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={() => setSelectedOrder(null)}>
              Назад до списку
            </Button>
            <Button variant="destructive" onClick={() => handleDelete(selectedOrder.id)}>
              Скасувати замовлення
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          {orders.length === 0 && (
            <p className="text-center text-muted-foreground">У вас немає замовлень.</p>
          )}

          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow cursor-pointer"
              onClick={() => setSelectedOrder(order)}
            >
              <div className="flex items-center gap-4">
                <img
                  src={order.image}
                  alt="bike"
                  className="w-20 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">Замовлення №: {order.id}</p>
                  <p className="text-muted-foreground text-sm">{order.firstName} {order.lastName}</p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{order.total} грн</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
