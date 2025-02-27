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
          <p>{"location: 'Romanica, Cluj-Napoca'"}</p>
        </div>
        <p>{"}"}</p>
      </div>
    </CardLoader>
  );
}
