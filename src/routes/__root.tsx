import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <div className="fixed bottom-2 left-20 right-20 bg-slate-600 rounded-lg p-2 flex justify-evenly">
        <Link
          to="/$region"
          params={{ region: "barolo" }}
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link
          to="/map"
          activeProps={{
            className: "font-bold",
          }}
        >
          Map
        </Link>
        <Link
          to="/explore"
          activeProps={{
            className: "font-bold",
          }}
        >
          Explore
        </Link>
      </div>
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  );
}
