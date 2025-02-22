import { TableProps, TRow } from "@/types";

export default function Table<T extends TRow>({
  columns,
  rows,
}: TableProps<T>) {

  return (
    <div className="flex max-w-full flex-col gap-8 overflow-hidden sm:gap-4 p-6 pt-2 rounded-xl shadow-sm">
      <div className="max-w-full overflow-x-auto">
        <table className="border-b border-solid border-parch16">
          <thead className="w-auto min-w-full border-b border-solid border-parch16 lg:overflow-x-hidden">
            <tr className="h-10">
              {columns.map((column) => (
                <th
                  key={column.id}
                >
                  <span className="text-parch16 sm:text-lg">
                    {column.label}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="even:bg-parch02">
                {columns.map((column) => (
                  <td
                    className="border-b border-parch05 p-4 sm:py-3 sm:pl-2 sm:pr-4 h-16 items-center sm:table-cell sm:h-auto"
                    key={column.id}
                  >
                    {typeof row[column.id] == "object"
                      ? Array.from(row[column.id] as string[]).join(", ")
                      : row[column.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
