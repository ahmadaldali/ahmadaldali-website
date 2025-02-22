import Link from "next/link";

export function HeaderButton({
  buttonText,
  buttonLink,
}: {
  buttonText: string;
  buttonLink: string;
}) {
  return (
    <Link href={buttonLink}>
      <strong>{buttonText}</strong>
    </Link>
  );
}
