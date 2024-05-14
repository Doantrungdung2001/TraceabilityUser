import React from "react";

import { useParams } from "react-router-dom";
import useScan from "./useScan";
import QR from "../../Services/qrService";
import { formatDateTime, formatTransactionHashTable } from "../../Utils/helpers";

const ScanInfo = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);
  const [qrInfo, setQRInfo] = React.useState(null);
  const projectId = useParams().projectId
  const privateId = useParams().privateId
  const { projectInfo,
    isSuccessProjectInfo,
    isLoadingProjectInfo,
    allDistributerWithQR,
    isSuccessQR,
    isLoadingQR } = useScan({ projectId });


  const handleScanQR = async ({projectId, privateId }) => {
    console.log("projectId: ", projectId)
    console.log("privateId: ", privateId)
    setScanned(true);
    try {
      setLoading(true);
      const res = await QR.scanQR({projectId, privateId})
      if (res.status === 200 && res.data.metadata.message === "QR is already scanned in blockchain" || res.data.metadata.message === "QR is already scanned") {
        setQRInfo({
          timeScanned: res.data.metadata?.scannedQR?.timeScanned,
          txScan: res.data.metadata?.scannedQR?.txScan,
          firstScan: false
        });

        console.log("qrInfo: ", {
          timeScanned: res.data.metadata?.scannedQR?.timeScanned,
          txScan: res.data.metadata?.scannedQR?.txScan,
          firstScan: false
        })
      }

      if (res.status === 200 && !res.data.metadata.message ) {
        setQRInfo({
          timeScanned: res.data.metadata?.qrItem?.timeScanned,
          txScan: res.data.metadata?.txScan,
          firstScan: true
        });
      }
      setLoading(false);
      console.log("res: ", res)
    } catch (error) {
      console.log("error: ", error)
      setError(error);
    }
  };

  

  return (
    <section className="" style={{ paddingTop: "10vh" }}>
      {
        isSuccessProjectInfo && isSuccessQR && (
            <div style={{ paddingTop: "10vh" }}>
                <h1>{projectInfo.plant.plant_name}</h1>
                <h2>{projectInfo.description}</h2>
                <h3>{projectInfo.projectIndex}</h3>
                <h4>{projectInfo.farm.name}</h4>
                
                <div>
                    {allDistributerWithQR.map((distributer) => (
                    <div key={distributer.name}>
                        <h1>{distributer.name}</h1>
                    </div>
                    ))}
                </div>
                <button onClick={() => handleScanQR({projectId, privateId})} disabled={scanned}>Scan QR</button>
            </div>
        )
      }
      {
        isLoadingProjectInfo || isLoadingQR && (
            <div style={{ paddingTop: "10vh" }}>
                Loading...
            </div>
        )
      }
      {
        loading && (
            <div style={{ paddingTop: "10vh" }}>
                Scanning QR...
            </div>
        )
      }
      {
        qrInfo && qrInfo.firstScan && (
            <div style={{ paddingTop: "10vh" }}>
                <h1>QR is scanned for the first time</h1>
                <h2>Time: {formatDateTime(qrInfo.timeScanned)}</h2>
                <h3>Transaction: {formatTransactionHashTable({str: qrInfo.txScan, a: 8, b: 5})}</h3>
            </div>
        )
      }
      {
        qrInfo && !qrInfo.firstScan && (
            <div style={{ paddingTop: "10vh" }}>
                <h1>QR is already scanned</h1>
                <h2>Time: {formatDateTime(qrInfo.timeScanned)}</h2>
                <h3>Transaction: {formatTransactionHashTable({str: qrInfo.txScan, a: 8, b: 5})}</h3>
            </div>
        )
      }
    </section>
  );
};

export default ScanInfo;
