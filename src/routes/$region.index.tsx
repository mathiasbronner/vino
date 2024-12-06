import { createFileRoute } from "@tanstack/react-router";
import { SideNavigation } from "../components/SideNavigation";
import { data } from "../data";

export const Route = createFileRoute("/$region/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { region } = Route.useParams();
  const r = data.find(({ name }) => name === region);
  if (!r) return null;

  return (
    <>
      <div className="flex flex-col gap-4">
        <img src="/Barolo-wine-region.jpg" />
        <h1 className="text-xl">{r.title}</h1>
        <p>{r.shortDescription}</p>
        <p>{r.description}</p>
      </div>
      <SideNavigation region={r.name} />
    </>
  );
}
