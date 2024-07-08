import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);

// Code optimization: 2025-10-18T11:42:35.054Z
// Code optimization: 2025-10-19T11:31:17.049Z
// Code optimization: 2025-10-19T09:32:10.394Z