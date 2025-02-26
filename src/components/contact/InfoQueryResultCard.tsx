import { ContactCardLoader } from "./ContactCardLoader";

export default function InfoQueryResultCard() {
  return (
    <ContactCardLoader>
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
              <td>+4 years</td>
              <td>Laravel, Javascript, Svelte, VueJs, REST Apis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContactCardLoader>
  );
}
