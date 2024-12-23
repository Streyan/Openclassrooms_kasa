import Badge from "./badge";

interface Props {
  host: { name?: string; picture: string };
}

function Host({ host }: Props) {
  return (
    <div className="flex-row host">
      <p className="host_name">{host.name ?? "Nom"}</p>
      <Badge imageURL={host.picture} />
    </div>
  );
}

export default Host;
