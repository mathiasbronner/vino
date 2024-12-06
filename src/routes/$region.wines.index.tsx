import { createFileRoute } from "@tanstack/react-router";
import { SideNavigation } from "../components/SideNavigation";
import { data } from "../data";

export const Route = createFileRoute("/$region/wines/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { region } = Route.useParams();
  const r = data.find(({ name }) => name === region);
  if (!r) return null;

  return (
    <>
      <img src="/wines/wine 1.png" className="h-20" />
      <div>Enzo Bartoli - Barolo, 2019</div>
      <SideNavigation region={r.name} />
    </>
  );
}
