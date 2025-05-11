import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Catalog from "./pages/Catalog";
import BikeRental from "./components/BikeRental";
import ReviewsPage from "./pages/ReviewsPage";
import LocationsPage from "./pages/LocationsPage";
import CityBikesList from "./pages/CityBikesList";
import MountainBikesList from "./pages/MountainBikesList";
import ElectricBikesList from "./pages/ElectricBikesList";
import RentalForm from "./pages/RentalForm";
import OrdersPage from "./pages/MyOrdersPage";
import Layout from "./components/Layout";
import ScrollToHashElement from "./components/ScrollToHashElement";

function HomeContent() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <BikeRental />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/bikes" element={<BikeRental />} />
          <Route path="/catalog/:type" element={<Catalog />} />
          <Route path="/catalog/city" element={<CityBikesList />} />
          <Route path="/catalog/mountain" element={<MountainBikesList />} />
          <Route path="/catalog/electric" element={<ElectricBikesList />} />
          <Route path="/rent/:type/:bikeId" element={<RentalForm />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
