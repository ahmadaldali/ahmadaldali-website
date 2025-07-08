import { CardLoader } from "@/components/ui/CardLoader";

export default function InfoQueryResultCard() {
  return (
    <CardLoader>
      <div className="w-full h-full  flex justify-center items-center">
        <table className="w-full">
          <thead className="text-center">
            <tr>
              <th>Experience</th>
              <th>Main Skills</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>+5 years</td>
              <td>Laravel, Javascript, Svelte, VueJs, REST Apis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CardLoader>
  );
}
