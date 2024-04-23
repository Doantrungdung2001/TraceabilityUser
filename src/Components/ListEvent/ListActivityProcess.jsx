import React from "react";
import {
  renderTypeProcess,
  formatTransactionHashTable,
} from "../../Utils/helpers";

const ListActivityProcess = ({ listActivity }) => {
  return (
    <div className="rounded-lg p-2">
      <div className="mx-auto flex justify-center h-screen">
        <div
          className="w-full h-full overflow-auto shadow bg-white "
          id="journal-scroll"
        >
          {listActivity?.length > 0 && (
            <table className="w-full">
              {listActivity.map((activity, index) => (
                <tbody key={index}>
                  <tr className="relative transform scale-100 text-xs lg:text-base py-1 border-b-2 border-gray-300 cursor-default bg-gray-200 bg-opacity-25">
                    <td className="lg:pl-5 lg:pr-3 pl-2 whitespace-no-wrap">
                      <div className="text-gray-400">Today</div>
                      <div>07:45</div>
                    </td>
                    <td className="px-2 py-2 whitespace-no-wrap">
                      <div className="leading-5 text-black font-medium text-base lg:text-2xl">
                        {renderTypeProcess(activity.type)}
                      </div>
                      <div className="leading-5 text-gray-900 text-sm lg:text-lg">
                        {activity.name.length > 20
                          ? activity.name.slice(0, 20) + "..."
                          : activity.name}{" "}
                        {"    "}
                        <a className="text-blue-500 hover:underline">
                          {formatTransactionHashTable({
                            str: activity.tx,
                            a: 8,
                            b: 5,
                          })}
                        </a>
                      </div>
                      <div className="leading-2 text-blue-400 text-xs">
                        Nhấn vào để xem chi tiết
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListActivityProcess;
