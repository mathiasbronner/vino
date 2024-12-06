import { Link } from "@tanstack/react-router";

export const SideNavigation = ({ region }: { region: string }) => (
  <div className="fixed right-2 top-40 bg-slate-600 rounded-lg p-2 flex flex-col gap-3 justify-evenly">
    <Link
      to="/$region"
      params={{ region }}
      activeProps={{
        className: "font-bold",
      }}
    >
      Overview
    </Link>
    <Link
      to="/$region/terroir"
      params={{ region }}
      activeProps={{
        className: "font-bold",
      }}
    >
      Terroir
    </Link>
    <Link
      to="/$region/history"
      params={{ region }}
      activeProps={{
        className: "font-bold",
      }}
    >
      History
    </Link>
    <Link
      to="/$region/grapes"
      params={{ region }}
      activeProps={{
        className: "font-bold",
      }}
    >
      Grapes
    </Link>
    <Link
      to="/$region/wines"
      params={{ region }}
      activeProps={{
        className: "font-bold",
      }}
    >
      Wines
    </Link>
  </div>
);
