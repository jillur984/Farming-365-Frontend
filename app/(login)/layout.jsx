import "../globals.css";
import StoreProvider from "../storeProvider";

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
}
