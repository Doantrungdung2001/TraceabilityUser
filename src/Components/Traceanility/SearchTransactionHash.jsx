import React, { useState } from "react";
import Web3 from "web3";
import {
  Spinner
} from "@material-tailwind/react";

const SearchTransactionHash = () => {
  const [transactionHash, setTransactionHash] = useState('');
  const [transactionInfo, setTransactionInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  // Ánh xạ giữa các topic và tên sự kiện, cũng như cấu trúc dữ liệu của mỗi sự kiện
  const eventMap = {
    '0xa7f8f582d090b5312bbe3d5f616508e184319e9e0f3824445f07745728304c5f': {
      name: 'ProjectCreated',
      dataStructure: [
        {
          type: 'uint256',
          name: 'projectId',
          indexed: true,
        },
        {
          type: 'address',
          name: 'owner',
          indexed: true,
        },
        {
          type: 'string',
          name: 'farm',
          indexed: false,
        },
        {
          type: 'string',
          name: 'input',
          indexed: false,
        }
      ]
    },
    '0x86ca012eeec5179616b871b1e8eac5e98a1abb80d429d200ae965170463ba85f': {
      name: 'ProcessInserted',
      dataStructure: [
        {
          type: 'uint256',
          name: 'projectId',
          indexed: true,
        },
        {
          type: 'string',
          name: 'process',
          indexed: false,
        }
      ]
    },
    '0x67c7b818c4a6649026cffd6fa5216819bcb4a5f1ce495e4b9b5aecb73bed54d7': {
      name: 'ExpectInserted',
      dataStructure: [
        {
          type: 'uint256',
          name: 'projectId',
          indexed: true,
        },
        {
          type: 'string',
          name: 'expect',
          indexed: false,
        }
      ]
    },
    '0x5d22b2c17f9c0779c52f956eb23d2080eefebdf90ac9873b3c9d9e08c52b0d9d': {
      name: 'OutputInserted',
      dataStructure: [
        {
          type: 'uint256',
          name: 'projectId',
          indexed: true,
        },
        {
          type: 'string',
          name: 'output',
          indexed: false,
        }
      ]
    },
    '0xf98fb96e12314e75bed7f8fa15959c9227cbdb7aa8774dc674ebe16c3780b7e8': {
      name: 'InputUpdated',
      dataStructure: [
        {
          type: 'uint256',
          name: 'projectId',
          indexed: true,
        },
        {
          type: 'string',
          name: 'input',
          indexed: false,
        }
      ]
    },
    '0x86ca012eeec5179616b871b1e8eac5e98a1abb80d429d200ae965170463ba85f': {
      name: 'ProcessUpdated',
      dataStructure: [
        {
          type: 'uint256',
          name: 'projectId',
          indexed: true,
        },
        {
          type: 'string',
          name: 'process',
          indexed: false,
        }
      ]
    },
    '0xd6e26280f779e80f6b6156ad164395e84a85d1f3ec41c70adb37cf41e743a2eb': {
      name: 'ExpectUpdated',
      dataStructure: [
        {
          type: 'uint256',
          name: 'projectId',
          indexed: true,
        },
        {
          type: 'string',
          name: 'expect',
          indexed: false,
        }
      ]
    },
    '0x2e8e85ac143af4ef00d5b2faf8dbf69ab450d72e9ac6f2f4236b818e2a0631ff': {
      name: 'OutputUpdated',
      dataStructure: [
        {
          type: 'uint256',
          name: 'projectId',
          indexed: true,
        },
        {
          type: 'string',
          name: 'output',
          indexed: false,
        }
      ]
    },
    '0x3fee1c70ec084e00a256424ab31507324668a0b12407659524b766ac1d43cea5': {
      name: 'CameraAdded',
      dataStructure: [
        {
          type: 'uint256',
          name: 'cameraId',
          indexed: true,
        },
        {
          type: 'address',
          name: 'owner',
          indexed: true,
        }
      ]
    },
    '0x568a3ea647075e7326b95087a8c72a649b4f6db67a119eb8cd979c81468b4aa5': {
      name: 'ConnectionLossAdded',
      dataStructure: [
        {
          type: 'uint256',
          name: 'cameraId',
          indexed: true,
        },
        {
          type: 'uint256',
          name: 'date',
          indexed: false,
        },
        {
          type: 'string',
          name: 'connectionLoss',
          indexed: false,
        },
        {
          type: 'uint256',
          name: 'totalLossPerDay',
          indexed: false,
        }
      ]
    },
    '0xf6ba110aff8c34e45880625e8ff9e3dc09e5df20397bd4a296b8728546d05350': {
      name: 'VideoAdded',
      dataStructure: [
        {
          type: 'uint256',
          name: 'cameraId',
          indexed: true,
        },
        {
          type: 'string',
          name: 'videoHash',
          indexed: false,
        },
        {
          type: 'uint256',
          name: 'date',
          indexed: false,
        },
        {
          type: 'string',
          name: 'timeDesciption',
          indexed: false,
        }
      ]
    },
    '0xe': {
      name: 'ImageInserted',
      dataStructure: [
        {
          type: 'uint256',
          name: 'projectId',
          indexed: true,
        },
        {
          type: 'string',
          name: 'hashImage',
          indexed: false,
        }
      ]
    },
    '0xf': {
      name: 'WeatherInserted',
      dataStructure: [
        {
          type: 'uint256',
          name: 'projectId',
          indexed: true,
        },
        {
          type: 'string',
          name: 'weather',
          indexed: false,
        }
      ]
    },
  };

  const eventMapData = (event) => {
    switch (event.name) {
      case 'ProjectCreated':
        return (
          <ul>
            <li>Project Index: {Number(event.data.projectId)}</li>
            <li>Owner: {event.data.owner}</li>
            <li>Farm Id: {event.data.farm}</li>
            <li>Input: {event.data.input}</li>
          </ul>
        )
      case 'ProcessInserted':
        return (
          <ul>
            <li>Project Index: {Number(event.data.projectId)}</li>
            <li>Process: {event.data.process}</li>
          </ul>
        )
      case 'ExpectInserted':
        return (
          <ul>
            <li>Project Index: {Number(event.data.projectId)}</li>
            <li>Expect: {event.data.expect}</li>
          </ul>
        )
      case 'OutputInserted':
        return (
          <ul>
            <li>Project Index: {Number(event.data.projectId)}</li>
            <li>Output: {event.data.output}</li>
          </ul>
        )
      case 'InputUpdated':
        return (
          <ul>
            <li>Project Index: {Number(event.data.projectId)}</li>
            <li>Input: {event.data.input}</li>
          </ul>
        )
      case 'ProcessUpdated':
        return (
          <ul>
            <li>Project Index: {Number(event.data.projectId)}</li>
            <li>Process: {event.data.process}</li>
          </ul>
        )
      case 'ExpectUpdated':
        return (
          <ul>
            <li>Project Index: {Number(event.data.projectId)}</li>
            <li>Expect: {event.data.expect}</li>
          </ul>
        )
      case 'OutputUpdated':
        return (
          <ul>
            <li>Project Index: {Number(event.data.projectId)}</li>
            <li>Output: {event.data.output}</li>
          </ul>
        )
      case 'CameraAdded':
        return (
          <ul>
            <li>Camera Index: {Number(event.data.cameraId)}</li>
            <li>Owner: {event.data.owner}</li>
          </ul>
        )
      case 'ConnectionLossAdded':
        return (
          <ul>
            <li>Camera Index: {Number(event.data.cameraId)}</li>
            <li>Date: {Number(event.data.date)}</li>
            <li>Connection Loss: {event.data.connectionLoss}</li>
            <li>Total Loss Per Day: {Number(event.data.totalLossPerDay)}</li>
          </ul>
        )
      case 'VideoAdded':
        return (
          <ul>
            <li>Camera Index: {Number(event.data.cameraId)}</li>
            <li>Video Hash: {event.data.videoHash}</li>
            <li>Date: {Number(event.data.date)}</li>
            <li>Time Description: {event.data.timeDesciption}</li>
          </ul>
        )
  }
}

  const getTransactionInfo = async () => {
    try {
      setLoading(true);
      const web3 = new Web3('https://evmos-pokt.nodies.app');
      const transaction = await web3.eth.getTransaction(transactionHash);
      
      
      if (!transaction) {
        alert('Transaction not found');
        setLoading(false);
        return;
      }

      const receipt = await web3.eth.getTransactionReceipt(transactionHash);
      console.log("recept: ", receipt)
      const logs = receipt.logs.map(log => {
        const eventData = eventMap[log.topics[0]]; // Lấy thông tin về sự kiện từ map
        console.log("event data: ", eventData)
        
        if (!eventData) return null;

        return {
          name: eventData.name,
          data: web3.eth.abi.decodeLog(
            eventData.dataStructure,
            log.data,
            log.topics
          )
        };
      }).filter(Boolean); // Lọc bỏ các sự kiện không hợp lệ

      let block = await web3.eth.getBlock(Number(transaction.blockNumber))
      let timestamp = Number(block.timestamp)

      setTransactionInfo({
        transactionHash,
        blockNumber: Number(transaction.blockNumber),
        from: transaction.from,
        to: transaction.to,
        gasUsed: Number(receipt.gasUsed),
        timestamp: new Date(timestamp * 1000),
        events: logs,
      });
      setLoading(false);
    } catch (error) {
      <alert className="text-red-500">Error fetching transaction info: {error}</alert>
      console.error('Error fetching transaction info:', error);
      setLoading(false);
    }
  };

  return (
    <section className="">
      <section>
        <div className="flex items-center justify-center min-h-screen bg-green-100">
          <div className="mx-5 bg-white rounded-2xl border shadow-xl p-5 md:p-10 max-w-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 ">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="font-bold text-2xl text-gray-700 w-full text-center">
                Transaction hash
              </h1>
              <p className="text-sm text-gray-500 text-center w-full">
                Hãy nhập mã transaction hash sau đó kết qua tra cứu sẽ hiển thị.
              </p>
              <input
                type="text"
                placeholder="index"
                className="border-2 rounded-lg w-full h-12 px-4"
                onChange={(e) => setTransactionHash(e.target.value.trim())}
              />
              <button className="bg-green-400 text-white rounded-md font-semibold px-4 py-3 w-full" onClick={getTransactionInfo}>
                Tra cứu
              </button>
            </div>
          </div>
        </div>
      </section>

      {
        loading ? <Spinner /> : transactionInfo && (
          <section className="bg-gray-100 p-4 md:p-10 mx-2 md:mx-5">
        <div class="bg-white overflow-hidden shadow rounded-lg border">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Thông tin
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Dưới đây là thông tin từ transaction hash của bạn
            </p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl class="sm:divide-y sm:divide-gray-200">
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Transaction hash</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {transactionInfo.transactionHash}
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Block number</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {transactionInfo.blockNumber}
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">From:</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {transactionInfo.from}
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">To:</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {transactionInfo.to}
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Gas used:</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {transactionInfo.gasUsed}
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Time:</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {transactionInfo.timestamp.toString()}
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Name event:</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {transactionInfo.events[0].name}
                </dd>
              </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Data:</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {eventMapData(transactionInfo.events[0])}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
        )
      }
      
    </section>
  );
};

export default SearchTransactionHash;
