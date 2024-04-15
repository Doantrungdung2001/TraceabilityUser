import React from "react";
import {
  formatDateTime,
  formatTransactionHashTable,
} from "../../Utils/helpers";
export const DetailActivity = ({ index, dataActivity }) => {
  console.log(dataActivity);
  return (
    <div className="flex items-center w-full my-5 -ml-1.5 px-2">
      <div className="">
        <div className="text-green-500 font-bold text-xl">
          <p>Lần thứ {index}</p>
        </div>
        <div className="w-full md:w-[40rem]">
          {dataActivity.type === "pesticide" && (
            <div>
              <div className="max-w-screen-md text-sm mb-3">
                <h3 className="text-lg font-semibold mb-1">
                  Thời gian nhập liệu
                </h3>
                <h3 class="text-blue-600">
                  {formatDateTime(dataActivity.createdAtTime)}
                </h3>
                <h3 className="text-lg font-semibold">Thời gian chỉnh sửa</h3>
                <h3 class="text-blue-600">
                  {formatDateTime(dataActivity.modifiedAt)}
                </h3>
                <h4 className="text-lg font-semibold">Mã Hash</h4>
                <p class="text-blue-600">
                  {formatTransactionHashTable({
                    str: dataActivity.tx,
                    a: 8,
                    b: 5,
                  })}
                </p>
                <h3 className="text-lg font-semibold">Đối tượng</h3>
                <p>{dataActivity.pestAndDiseaseControlActivity.name}</p>
                <h3 className="text-lg font-semibold">Kiểu</h3>
                <p>
                  {dataActivity.pestAndDiseaseControlActivity.type === "pest"
                    ? "Sâu"
                    : "Bệnh"}
                </p>
                <h3 className="text-lg font-semibold">Triệu chứng</h3>
                <p>{dataActivity.pestAndDiseaseControlActivity.symptoms}</p>
                <h3 className="text-lg font-semibold">Giải pháp</h3>
                {dataActivity.pestAndDiseaseControlActivity.solution.map(
                  (item, index) => (
                    <p key={index}>
                      {index + 1}-{item}
                    </p>
                  )
                )}
              </div>
            </div>
          )}

          {dataActivity.type === "fertilize" && (
            <div>
              <div className="max-w-screen-md mb-3 text-sm">
                <h3 class="text-blue-600">
                  {formatDateTime(dataActivity.time)}
                </h3>

                <h4 className="text-lg font-semibold mb-2">Mã Hash</h4>
                <p class="text-blue-600">
                  {formatTransactionHashTable({
                    str: dataActivity.tx,
                    a: 8,
                    b: 5,
                  })}
                </p>
                <h3 className="text-lg font-semibold mb-2">Thời điểm trồng</h3>
                <p>{dataActivity.fertilizationActivity.fertilizationTime}</p>
                <h3 className="text-lg font-semibold mb-2">Kiểu</h3>
                <p>
                  {dataActivity.fertilizationActivity.type === "baseFertilizer"
                    ? "Bón lót"
                    : "Bón thúc"}
                </p>
                <h3 className="text-lg font-semibold mb-2">Mô tả</h3>
                <p>{dataActivity.fertilizationActivity.description}</p>
              </div>
            </div>
          )}

          {dataActivity.type === "planting" && (
            <div>
              <div className="max-w-screen-md mb-3 text-sm">
                <h3 class="text-blue-600">
                  {formatDateTime(dataActivity.time)}
                </h3>

                <h4 className="text-lg font-semibold">Mã Hash</h4>
                <p class="text-blue-600">
                  {formatTransactionHashTable({
                    str: dataActivity.tx,
                    a: 8,
                    b: 5,
                  })}
                </p>
                <h3 className="text-lg font-semibold">Mật độ</h3>
                <p>{dataActivity.plantingActivity.density}</p>
                <h3 className="text-lg font-semibold">Mô tả</h3>
                <p>{dataActivity.plantingActivity.description}</p>
              </div>
            </div>
          )}

          {dataActivity.type === "other" && (
            <div>
              <div>
                <div className="max-w-screen-md mb-3 text-sm">
                  <h3 class="text-blue-600">
                    {formatDateTime(dataActivity.time)}
                  </h3>

                  <h4 className="text-lg font-semibold">Mã Hash</h4>
                  <p class="text-blue-600">
                    {formatTransactionHashTable({
                      str: dataActivity.tx,
                      a: 8,
                      b: 5,
                    })}
                  </p>
                  <h3 className="text-lg font-semibold">Kiểu</h3>
                  <p>Hoạt động khác</p>
                  <h3 className="text-lg font-semibold">Mô tả</h3>
                  <p>{dataActivity.other.description}</p>
                </div>
              </div>
            </div>
          )}

          {dataActivity.type === "cultivation" && (
            <div>
              <div>
                <div className="max-w-screen-md mb-3 text-sm">
                  <h3 class="text-blue-600">
                    {formatDateTime(dataActivity.time)}
                  </h3>

                  <h4 className="text-lg font-semibold">Mã Hash</h4>
                  <p class="text-blue-600">
                    {formatTransactionHashTable({
                      str: dataActivity.tx,
                      a: 8,
                      b: 5,
                    })}
                  </p>
                  <h3 className="text-lg font-semibold">Hoạt động</h3>
                  <p>{dataActivity.cultivationActivity.name}</p>
                  <h3 className="text-lg font-semibold">Mô tả</h3>
                  <p>{dataActivity.cultivationActivity.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
