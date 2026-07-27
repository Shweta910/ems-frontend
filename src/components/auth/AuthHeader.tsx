interface Props {
  title: string;
  subtitle: string;
}

export default function AuthHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="space-y-2 text-center">
      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}