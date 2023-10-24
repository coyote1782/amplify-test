import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import awsExports from "./aws-exports";
import "./index.css";

Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
