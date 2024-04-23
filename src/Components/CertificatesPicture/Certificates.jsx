import React, { useState, useEffect } from "react";

const Certificates = ({ dataPicture, isSuccessCertificateImages }) => {
  const [active, setActive] = useState();
  useEffect(() => {
    if (dataPicture && dataPicture.length > 0)
      setActive(dataPicture[0].imgelink);
  }, [isSuccessCertificateImages]);
  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {dataPicture.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-15 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
