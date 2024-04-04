import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
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

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const reuslt = null;
  return (
    <section className="">
      <section>
        <div className="flex items-center justify-center min-h-screen bg-green-100">
          <div className="mx-5 bg-white rounded-2xl border shadow-xl p-5 md:p-10 max-w-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 ">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="font-bold text-2xl text-gray-700 w-full text-center">
                Transaction Hash
              </h1>
              <p className="text-sm text-gray-500 text-center w-full">
                Hãy nhập mã transaction hash sau đó kết qua tra cứu sẽ hiển thị.
              </p>
              <input
                type="text"
                placeholder="transaction hash"
                className="border-2 rounded-lg w-full h-12 px-4"
              />
              <button className="bg-green-400 text-white rounded-md font-semibold px-4 py-3 w-full">
                Tra cứu
              </button>
            </div>
          </div>
        </div>
      </section>
      {reuslt && (
        <section className="m-4 sm:m-16 px-4 bg-white">
          <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                Chủ sở hữu
              </AccordionHeader>
              <AccordionBody>
                <div class="bg-white overflow-hidden shadow rounded-lg border">
                  <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Thông tin
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      This is some information about the user.
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Full name
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          John Doe
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          johndoe@example.com
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Phone number
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          (123) 456-7890
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          123 Main St Anytown, USA 12345
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                Nông trại
              </AccordionHeader>
              <AccordionBody>
                {/* <div className="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br"> */}
                <div className="flex items-center justify-center from-white via-white to-white bg-gradient-to-br">
                  <div className=" sm:m-10 m-6 max-w-4xl mx-3 sm:px-6 lg:px-8 py-6 bg-gray-100 rounded-lg shadow-xl">
                    <div className="max-w-4xl px-4 mx-auto space-y-6">
                      <p className="text-gray-600">
                        Giải thích sơ qua về phần này
                      </p>

                      <div className="text-base leading-7">
                        <p>
                          <a
                            target="_blank"
                            className="font-medium text-teal-700 hover:underline"
                          >
                            Thông tin 1
                          </a>
                        </p>
                        <p className="text-gray-700">
                          Looking For Free premium components?
                          afasdfasdfdsafasdfasfv afadsvav fafasdsd afdsjn
                          fapasdfn fjafn apfjn fdlfjsf vjafas laflsfnafjasdl
                        </p>
                      </div>

                      <div className="text-base leading-7">
                        <p>
                          <a
                            target="_blank"
                            className="font-medium text-teal-700 hover:underline"
                          >
                            Thông tin 1
                          </a>
                        </p>
                        <p className="text-gray-700">
                          Looking For Free premium components?
                          afasdfasdfdsafasdfasfv afadsvav fafasdsd afdsjn
                          fapasdfn fjafn apfjn fdlfjsf vjafas laflsfnafjasdl
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                Đầu vào
              </AccordionHeader>
              <AccordionBody>
                <div class="bg-gray-100 overflow-hidden shadow rounded-lg border ">
                  <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Thông tin
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      This is some information about the user.
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Full name
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          John Doe
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          johndoe@example.com
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Phone number
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          (123) 456-7890
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          123 Main St Anytown, USA 12345
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(4)}>
                Quá trình
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(5)}>
                Dự đoán
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(6)}>
                Đầu ra
              </AccordionHeader>
              <AccordionBody>
                <div class="bg-gray-100 overflow-hidden shadow rounded-lg border ">
                  <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Thông tin
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      This is some information about the user.
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Full name
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          John Doe
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          johndoe@example.com
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Phone number
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          (123) 456-7890
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          123 Main St Anytown, USA 12345
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(7)}>
                Hình ảnh và video
              </AccordionHeader>
              <AccordionBody>
                <div class="bg-gray-100 overflow-hidden shadow rounded-lg border ">
                  <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Thông tin
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      This is some information about the user.
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Full name
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          John Doe
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          johndoe@example.com
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Phone number
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          (123) 456-7890
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          123 Main St Anytown, USA 12345
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(8)}>
                Kết nối
              </AccordionHeader>
              <AccordionBody>
                <div class="bg-gray-100 overflow-hidden shadow rounded-lg border ">
                  <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Thông tin
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      This is some information about the user.
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Full name
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          John Doe
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          johndoe@example.com
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Phone number
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          (123) 456-7890
                        </dd>
                      </div>
                      <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          123 Main St Anytown, USA 12345
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
          </>
        </section>
      )}
    </section>
  );
};

export default SearchTransactionHash;
