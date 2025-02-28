import { CardLoader } from "@/components/ui/CardLoader";

export default function InfoResponseCard() {
  return (
    <CardLoader>
      <div>
        <p>{"{"}</p>
        <div className="pl-6">
          <p>{"id: 1,"}</p>
          <p>{"first_name: 'ahmad',"}</p>
          <p>{"last_name: 'aldali',"}</p>
          <p>{"email: 'ahmadaldali88@gmail.com',"}</p>
          <p>{"phone: '+40747428289',"}</p>
          <p>{"birthday: '1995-09-26',"}</p>
          <p>{"location: 'Romania, Cluj-Napoca',"}</p>
          <p>{"github: ["}</p>
          <p className="pl-4 underline text-blue-600"><a target="_blank" href={"https://github.com/ahmadaldali"}>https://github.com/ahmadaldali,</a></p>
          <p className="pl-4 underline text-blue-600"><a target="_blank" href={"https://github.com/aal181223"}>https://github.com/aal181223</a></p>
          <p>{"],"}</p>
        </div>
        <p>{"}"}</p>
      </div>
    </CardLoader>
  );
}
