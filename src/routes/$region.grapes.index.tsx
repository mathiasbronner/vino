import { createFileRoute } from "@tanstack/react-router";
import { SideNavigation } from "../components/SideNavigation";
import { data } from "../data";

export const Route = createFileRoute("/$region/grapes/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { region } = Route.useParams();
  console.table(region);
  const r = data.find(({ name }) => name === region);
  if (!r) return null;

  return (
    <>
      <img src="/nebbiolo-grape.webp" />
      <p>{r.grapeDescription}</p>
      <SideNavigation region={r.name} />
    </>
  );
}
