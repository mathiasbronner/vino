import { createFileRoute } from "@tanstack/react-router";
import { SideNavigation } from "../components/SideNavigation";
import { data } from "../data";

export const Route = createFileRoute("/$region/history/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { region } = Route.useParams();
  const r = data.find(({ name }) => name === region);
  if (!r) return null;

  return (
    <>
      <p>{r.historyDescription}</p>
      <SideNavigation region={r.name} />
    </>
  );
}
