import React from "react";

const deletedExpect = [
  {
    tx: "0x0e7947a640ca26cdeffbf1a0b6220bef053dddf50cd835aa574e0617cc76fce7",
    time: "2024-02-22T23:30:07.826Z",
    amount: 1002,
    note: "Thử tại đây và sửa tiếp.",
    isEdited: true,
    createdAtTime: "2024-02-23T09:58:21.943Z",
    isDeleted: true,
    _id: "65d865d1c160169bfeb919c7",
    historyExpect: [
      {
        tx: "0x1487f558a820196a5f4dd35401353853fe35144b9910b7c21078430c2c0a47c9",
        time: "2024-02-22T23:30:07.826Z",
        amount: 1002,
        note: "Thử tại đây.",
        modifiedAt: "2024-02-23T09:31:38.534Z",
        createdAtTime: "2024-02-23T09:30:57.088Z",
        _id: "65d865fac160169bfeb919e0",
      },
      {
        tx: "0x7c21c68a8125939b2c3201aa4721fd4aa9710fddb0e79ad136d1b0481500a81c",
        time: "2024-02-22T23:30:07.826Z",
        amount: 1002,
        note: "Thử tại đây và sửa.",
        modifiedAt: "2024-02-23T09:58:21.960Z",
        createdAtTime: "2024-02-23T09:31:38.524Z",
        _id: "65d86c3dc160169bfeb91a44",
      },
    ],
    deletedAt: "2024-04-15T10:17:48.087Z",
  },
];
const Tables = () => {
  return (
    <div className="block w-full overflow-x-auto max-w-xl">
      <table className="items-center w-full bg-white shadow-md border-collapse">
        <thead>
          <tr>
            <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left border-l-0 border-r-0 whitespace-nowrap">
              Thời gian
            </th>
            <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left border-l-0 border-r-0 whitespace-nowrap">
              Dự kiến (kg)
            </th>
            <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr className="text-gray-600">
            <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
              Organic Search
            </th>
            <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
              5,649
            </td>
            <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
              <div className="flex items-center">
                <button className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
                  Chi tiết
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
