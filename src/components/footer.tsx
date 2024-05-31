import { IS_DEVELOPMENT } from "../config";
import { useFilters } from "../hooks/use-filters";
import "./footer.css";

export function Footer() {
  const { filters } = useFilters();
  return (
    <footer className="footer">
      {JSON.stringify({ ...filters, IS_DEVELOPMENT }, null, 2)}
      {/* <h4>
        Prueba técnica de React * - <span>@test</span>
      </h4>
      <h5>Shopping Cart con useContext & userReducer</h5> */}
    </footer>
  );
}
