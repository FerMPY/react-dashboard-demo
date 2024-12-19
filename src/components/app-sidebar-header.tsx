export function AppSidebarHeader({
  icon,
  title,
}: {
  icon: React.ReactElement;
  title: string;
}) {
  return (
    <div>
      <div className="flex flex-col gap-0.5 leading-none">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
    </div>
  );
}
