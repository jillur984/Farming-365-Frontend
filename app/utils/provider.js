// utils/withProvider.js
"use client"; // Client component wrapper

import { Provider } from "react-redux";
import { store } from "../redux/store/store";

/**
 * Wrap any component with Redux Provider
 * @param {React.ReactNode} children
 */
export default function AuthProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
