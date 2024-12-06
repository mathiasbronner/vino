import { createFileRoute, Link } from "@tanstack/react-router";
import { data } from "../data";

export const Route = createFileRoute("/map")({
  component: MapComponent,
});

function MapComponent() {
  return (
    <div className="flex flex-col">
      <img src="/12x16-Italy-All-wine-map2.jpg" />

      {data.map((d) => (
        <Link
          to="/$region"
          params={{ region: d.name }}
          activeProps={{
            className: "font-bold",
          }}
          key={d.id}
        >
          {d.title}
        </Link>
      ))}
    </div>
  );
}
