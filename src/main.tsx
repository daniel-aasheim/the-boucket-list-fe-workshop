import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { App } from "./App";

/*
 * TODO 4: Setup TanStack Query.
 * We need a QueryClient, and a QueryClientProvider to wrap the App component.
 * Optionally, we can include the ReactQueryDevtools component to help debug the queries from the browser.
 */

/*
 *TODO 4a: Uncomment all the code lines in this file
 */
// const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <App />
    {/* <ReactQueryDevtools/> */}
    {/* </QueryClientProvider> */}
  </StrictMode>
);
