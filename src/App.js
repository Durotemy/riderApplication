import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Order from "./pages/Order.jsx";
import Layout from "./Layout.js";
import { Dashboard } from "./pages/Dashboard.jsx";
import OrderProcessing from "./pages/OrderProcessing.jsx";
import Rider from "./pages/Rider.jsx";
import PendingOrder from "./pages/PendingOrder.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/unpending-orders" element={<PendingOrder />} />
          <Route path="/orderprocessing" element={<OrderProcessing />} />
          <Route path="/rider" element={<Rider />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
