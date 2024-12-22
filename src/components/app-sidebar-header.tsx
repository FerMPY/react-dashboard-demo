export function AppSidebarHeader({
  icon,
  title,
}: {
  icon: React.ReactElement;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-0.5">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
    </div>
  );
}
