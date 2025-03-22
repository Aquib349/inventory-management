import { Route, Routes } from "react-router";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/signup/register";
import Dashboard from "./pages/dashboard/dashboard";
import ProductMaster from "./pages/master/product master/product-master";
import InventoryMaster from "./pages/master/inventory master/inventory-master";
import Page from "./pages/dashboard/page";
import { ProductProvider } from "./contexts/product-master-context";
import { InventoryProvider } from "./contexts/inventory-master-context";
import { PrivateRoute } from "./authentication/private-route";
import { AuthContextProvider } from "./contexts/auth-context";

function App() {
  return (
    <>
      <AuthContextProvider>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<SignUpPage />} />
        <Route element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Page />} />
          <Route
            path="product-master"
            element={
              <ProductProvider>
                <ProductMaster />
              </ProductProvider>
            }
          />
          <Route
            path="inventory-master"
            element={
              <InventoryProvider>
                <InventoryMaster />
              </InventoryProvider>
            }
          />
        </Route>
        </Route>
      </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
