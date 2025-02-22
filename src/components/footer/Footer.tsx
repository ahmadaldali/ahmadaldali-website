import AccountLinks from "@/components/accounts/AccountLinks";

export default function Footer() {
  return (
<footer className=" bg-parch04 text-parch16 flex flex-col px-12 py-4 w-full bottom-0">
    <div className="flex flex-col sm:flex-row pb-2">
      <AccountLinks />
    </div>
    <div className="border-parch16 flex flex-col items-center border-t pt-2 sm:flex-row sm:justify-between text-teal10">
        <strong className="text-xl">Ahmad Aldali</strong>
        <strong className="text-lg">© { new Date().getFullYear().toString() }</strong>
    </div>
</footer>
  );
}
