import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./index.css";

import QueryProvider from "@/providers/QueryProvider";
import { router } from "@/routes/router";
import { store } from "@/store";
import { Toaster } from "sonner";
import AuthInitializer from "@/components/auth/AuthInitializer";
import "sonner/dist/styles.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <Provider store={store}>
      <QueryProvider>
        <AuthInitializer />

        <RouterProvider router={router} />

        <Toaster richColors position="top-right" />
      </QueryProvider>
    </Provider>
  </React.StrictMode>,
);
