import { createFileRoute } from "@tanstack/react-router";
import { SideNavigation } from "../components/SideNavigation";
import { data } from "../data";

export const Route = createFileRoute("/$region/terroir/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { region } = Route.useParams();
  const r = data.find(({ name }) => name === region);
  if (!r) return null;

  return (
    <>
      <div>
        <img src="/Barolo-Barbaresco.jpg" />
        <p>{r.geographyDescription}</p>
      </div>
      <SideNavigation region={r.name} />
    </>
  );
}
