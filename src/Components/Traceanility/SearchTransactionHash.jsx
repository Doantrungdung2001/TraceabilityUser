import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Spinner
} from "@material-tailwind/react";
import Web3 from "web3";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const data = [1, 2, 3, 4, 5, 6];
const SearchTransactionHash = () => {
  const [open, setOpen] = React.useState(0);
  const [projectIndex, setProjectIndex] = React.useState("");
  const [processes, setProcesses] = React.useState(null);
  const [expects, setExpects] = React.useState(null);
  const [outputs, setOutputs] = React.useState(null);
  const [project, setProject] = React.useState(null);
  const [videos, setVideos] = React.useState(null);
  const [connectionLoss, setConnectionLoss] = React.useState(null);
  

  const [loadingProcesses, setLoadingProcesses] = React.useState(false);
  const [loadingExpects, setLoadingExpects] = React.useState(false);
  const [loadingOutputs, setLoadingOutputs] = React.useState(false);
  const [loadingProject, setLoadingProject] = React.useState(false);
  const [loadingVideos, setLoadingVideos] = React.useState(false);
  const [loadingConnectionLoss, setLoadingConnectionLoss] = React.useState(false);


  const jsonRpcURL = 'https://evmos-pokt.nodies.app' 
  const web3 = new Web3(jsonRpcURL)

  const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "expect",
          "type": "string"
        }
      ],
      "name": "ExpectInserted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "expect",
          "type": "string"
        }
      ],
      "name": "ExpectUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "hashImage",
          "type": "string"
        }
      ],
      "name": "ImageInserted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "input",
          "type": "string"
        }
      ],
      "name": "InputUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "output",
          "type": "string"
        }
      ],
      "name": "OutputInserted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "output",
          "type": "string"
        }
      ],
      "name": "OutputUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "process",
          "type": "string"
        }
      ],
      "name": "ProcessInserted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "process",
          "type": "string"
        }
      ],
      "name": "ProcessUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "farm",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "input",
          "type": "string"
        }
      ],
      "name": "ProjectCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "weather",
          "type": "string"
        }
      ],
      "name": "WeatherInserted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_farm",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_input",
          "type": "string"
        }
      ],
      "name": "createProject",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getProject",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getProjectExpects",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getProjectImages",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getProjectInput",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getProjectOutputs",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getProjectProcesses",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getProjectWeathers",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_expect",
          "type": "string"
        }
      ],
      "name": "insertExpect",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_hashImage",
          "type": "string"
        }
      ],
      "name": "insertImage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_output",
          "type": "string"
        }
      ],
      "name": "insertOutput",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_process",
          "type": "string"
        }
      ],
      "name": "insertProcess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_weather",
          "type": "string"
        }
      ],
      "name": "insertWeather",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numberOfProjects",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "projects",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "farm",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "projectsByOwner",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_expect",
          "type": "string"
        }
      ],
      "name": "updateExpect",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_input",
          "type": "string"
        }
      ],
      "name": "updateInput",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_output",
          "type": "string"
        }
      ],
      "name": "updateOutput",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_process",
          "type": "string"
        }
      ],
      "name": "updateProcess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  const video_abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "cameraId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "CameraAdded",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "addCamera",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "cameraId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "date",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "connectionLoss",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "totalLossPerDay",
          "type": "uint256"
        }
      ],
      "name": "addConnectionLoss",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "cameraId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "videoHash",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "date",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "timeDesciption",
          "type": "string"
        }
      ],
      "name": "addVideo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cameraCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "cameras",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "cameraId",
          "type": "uint256"
        }
      ],
      "name": "getCamera",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "hash",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "timeDesciption",
              "type": "string"
            }
          ],
          "internalType": "struct VideoHashContract.Video[]",
          "name": "",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "connectionLoss",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "totalLossPerDay",
              "type": "uint256"
            }
          ],
          "internalType": "struct VideoHashContract.ConnectionLoss[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "cameraId",
          "type": "uint256"
        }
      ],
      "name": "getConnectionLossByCamera",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "connectionLoss",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "totalLossPerDay",
              "type": "uint256"
            }
          ],
          "internalType": "struct VideoHashContract.ConnectionLoss[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "cameraId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endTime",
          "type": "uint256"
        }
      ],
      "name": "getConnectionLossByDateRange",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "connectionLoss",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "totalLossPerDay",
              "type": "uint256"
            }
          ],
          "internalType": "struct VideoHashContract.ConnectionLoss[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "cameraId",
          "type": "uint256"
        }
      ],
      "name": "getVideosByCamera",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "hash",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "timeDesciption",
              "type": "string"
            }
          ],
          "internalType": "struct VideoHashContract.Video[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "cameraId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endTime",
          "type": "uint256"
        }
      ],
      "name": "getVideosByDateRange",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "hash",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "timeDesciption",
              "type": "string"
            }
          ],
          "internalType": "struct VideoHashContract.Video[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  const contractAddress = '0x97e3B6d3132A36563b7B38E3eB5bC6af4b114623'
  const videoContractAddress = '0x1Ad6EcAd571B3F2e1aA113eb99E7FBE192F9a197'

  const contract = new web3.eth.Contract(abi, contractAddress)
  const videoContract = new web3.eth.Contract(video_abi, videoContractAddress)

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleQueryBlockchain = async () => {
    console.log("query blockchain", projectIndex);
    setLoadingProcesses(false)
    setLoadingExpects(false)
    setLoadingOutputs(false)
    setLoadingProject(false)
    setLoadingConnectionLoss(false)
    setLoadingVideos(false)
    const project = await contract.methods.getProject(projectIndex).call()
    setLoadingProject(true)
    setProject(project)
    console.log("project: ", project)

    const processes = await contract.methods.getProjectProcesses(projectIndex).call()
    setLoadingProcesses(true)
    setProcesses(processes)

    const expects = await contract.methods.getProjectExpects(projectIndex).call()
    setLoadingExpects(true)
    setExpects(expects)

    const outputs = await contract.methods.getProjectOutputs(projectIndex).call()
    setLoadingOutputs(true)
    setOutputs(outputs)


    // 1. call api to get list of cameraIndex and startDate and endTime
    // 2. query in blockchain video by cameraIndex
    // assume cameraIndex = [0], startDate = 2022-01-01, endTime = 2025-01-02
    const cameraIndex = [0]
    // convert startDate and endTime to unix time stamp
    let startDate = new Date("2022-01-01")
    let endTime = new Date("2025-01-02")

    startDate = startDate.getTime() / 1000
    endTime = endTime.getTime() / 1000
    console.log("startDate: ", startDate)
    console.log("end time: ", endTime)
    // loop in cameraIndex and query
    const videos = []
    const connectionLoss = []
    for (let i = 0; i < cameraIndex.length; i++) {
      const video = await videoContract.methods.getVideosByCamera(cameraIndex[i]).call()

      // loop in video to get list of videoItem with date between startDate and endTime, remember to convert date from unix time stamp to date
      const videoItem = video.filter(item => Number(item.date) >= startDate && Number(item.date) <= endTime)

      videos.push(...videoItem)
      const connection = await videoContract.methods.getConnectionLossByCamera(cameraIndex[i]).call()

      
      console.log("connection: ", connection)

      connection.forEach(item => console.log("date: ", Number(item.date)))

      const connectionItem = connection.filter(item => Number(item.date) >= startDate && Number(item.date) <= endTime)
      connectionLoss.push(...connectionItem)
    }

    console.log("videos: ", videos)
    console.log("connectionLoss: ", connectionLoss)

    setVideos(videos)
    setConnectionLoss(connectionLoss)
    setLoadingVideos(true)
    setLoadingConnectionLoss(true)

  }
  return (
    <section className="">
      <section>
        <div className="flex items-center justify-center min-h-screen bg-green-100">
          <div className="mx-5 bg-white rounded-2xl border shadow-xl p-5 md:p-10 max-w-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 ">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="font-bold text-2xl text-gray-700 w-full text-center">
                Project Index
              </h1>
              <p className="text-sm text-gray-500 text-center w-full">
                Hãy nhập mã project index sau đó kết qua tra cứu sẽ hiển thị.
              </p>
              <input
                type="text"
                placeholder="project index"
                className="border-2 rounded-lg w-full h-12 px-4"
                onChange={(e) => setProjectIndex(e.target.value)}
              />
              <button className="bg-green-400 text-white rounded-md font-semibold px-4 py-3 w-full" onClick={handleQueryBlockchain}>
                Tra cứu
              </button>
            </div>
          </div>
        </div>
      </section>
      {true && (
        <section className="m-4 sm:m-16 px-4 bg-white">
          <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(1)}>
              Địa chỉ ví ghi lên Blockchain: {project ? project[0] : ""}
              </AccordionHeader>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                Id Nông trại: {project ? project[1] : ""}
              </AccordionHeader>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                Đầu vào
              </AccordionHeader>
              <AccordionBody>
                {
                  loadingProject && project ? 
                  <>
                  {
                  project['2'].map((input, index) => (
                    <div key={index} class="bg-gray-100 overflow-hidden shadow rounded-lg border ">
                      <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                          Thông tin {index + 1}
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">
                          {input}
                        </p>
                      </div>
                      </div>
                      ))
                  }
                  </> : <Spinner />
                }
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(4)}>
                Quá trình
              </AccordionHeader>
                <AccordionBody>
                { loadingProcesses && (processes || processes.length === 0)  ? 
                <>
                {
                  processes.map((process, index) => (
                    <div key={index} class="bg-gray-100 overflow-hidden shadow rounded-lg border ">
                      <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                          Thông tin {index + 1}
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">
                          {process}
                        </p>
                      </div>
                      </div>
                      ))
                  }
                </> 
                : <Spinner />
                  
                }
              </AccordionBody>
              
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(5)}>
                Dự đoán
              </AccordionHeader>
              <AccordionBody>
                {
                  loadingExpects && (expects || expects.length === 0)  ?
                  <>
                  {
                    expects.map((expect, index) => (
                      <div key={index} class="bg-gray-100 overflow-hidden shadow rounded-lg border ">
                        <div class="px-4 py-5 sm:px-6">
                          <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Thông tin {index + 1}
                          </h3>
                          <p class="mt-1 max-w-2xl text-sm text-gray-500">
                            {expect}
                          </p>
                        </div>
                      </div>
                    ))
                  }
                  </>
                  : <Spinner />
                }
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(6)}>
                Đầu ra
              </AccordionHeader>
              <AccordionBody>
                { loadingOutputs && (outputs || outputs.length === 0)  ? 
               <>
                {
                  outputs.map((output, index) => (
                    <div key={index} class="bg-gray-100 overflow-hidden shadow rounded-lg border ">
                      <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                          Thông tin {index + 1}
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">
                          {output}
                        </p>
                      </div>
                    </div>
                  ))
                }
               </> : <Spinner />
                }
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(7)}>
                Hình ảnh và video
              </AccordionHeader>
              <AccordionBody>
                {
                  loadingVideos && (videos || videos.length === 0)  ? 
                  <>
                  {
                    videos.map((video, index) => (
                      <div key={index} class="bg-gray-100 overflow-hidden shadow rounded-lg border ">
                        <div class="px-4 py-5 sm:px-6">
                          <h3 class="text-lg leading-6 font-medium text-gray-900">
                          {new Date(Number(video.date) * 1000).toISOString()}
                          </h3>
                          <p class="mt-1 max-w-2xl text-sm text-gray-500">
                            <ul>
                              <li>
                                Video hash: {video.hash}
                              </li>
                              <li>
                                Time description: {video.timeDesciption}
                              </li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    ))
                  }
                  </> : <Spinner />
                }
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(8)}>
                Kết nối
              </AccordionHeader>
              <AccordionBody>
                {
                  loadingConnectionLoss && (connectionLoss || connectionLoss.length === 0)  ? 
                  <>
                  {
                    connectionLoss.map((connection, index) => (
                      <div key={index} class="bg-gray-100 overflow-hidden shadow rounded-lg border ">
                        <div class="px-4 py-5 sm:px-6">
                          <h3 class="text-lg leading-6 font-medium text-gray-900">
                          {new Date(Number(connection.date) * 1000).toISOString()}
                          </h3>
                          <p class="mt-1 max-w-2xl text-sm text-gray-500">
                            <ul>
                              <li>
                                Total loss per day (second): {Number(connection.totalLossPerDay)}
                              </li>
                              <li>
                                Connection loss: {connection.connectionLoss}
                              </li>
                            </ul>
                          </p>
                        </div>
                      </div>

                    ))
                } </> : <Spinner />
              }
              </AccordionBody>
            </Accordion>
          </>
        </section>
      )}
    </section>
  );
};

export default SearchTransactionHash;
