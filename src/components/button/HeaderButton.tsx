import Link from "next/link";

export function HeaderButton({
  buttonText,
  buttonLink,
  target,
}: {
  buttonText: string;
  buttonLink: string;
  target?: string
}) {
  return (
    <Link href={buttonLink} target={target?? '_self'}>
      <strong>{buttonText}</strong>
    </Link>
  );
}
