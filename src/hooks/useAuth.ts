// Share data between components that use this context (hook)
// Could add more functions

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const value = useContext(AuthContext);

  return value;
}
