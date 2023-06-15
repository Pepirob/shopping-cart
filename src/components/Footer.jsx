/* eslint-disable react/prop-types */
import "./Footer.css";
function Footer({ filters }) {
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {/* <h4>
        Prueba técnica de React <span> @pepirob</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  );
}

export default Footer;
