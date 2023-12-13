import React from "react";
import "./infor.css";
import { Card, Typography, Button } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Quantity", "Date"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

const mockdata = {
  ProductCode: 123456,
  Farm: "ABC",
  Procedure: "VietGap",
  Input: 1000,
  Output: 900,
  Fertilizer: "NPK",
};

const data = [
  {
    label: "Information",
    value: "Information",
  },
  {
    label: "Input",
    value: "Input",
  },

  {
    label: "Output",
    value: "Output",
  },
];

const Information = () => {
  return (
    <section className="information">
      <div className="r-title">
        <button className="button">
          Mã truy xuất : {mockdata.ProductCode}
        </button>
      </div>

      <div className="r-content">
        <div className="r-infor">
          <Tabs id="custom-animation" value="html">
            <TabsHeader className="r-header">
              {data.map(({ label, value }) => (
                <Tab className="r-tab" key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value }) => (
                <TabPanel key={value} value={value}>
                  <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                      <thead>
                        <tr>
                          {TABLE_HEAD.map((head) => (
                            <th
                              key={head}
                              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                              >
                                {head}
                              </Typography>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {TABLE_ROWS.map(({ name, job, date }, index) => {
                          const isLast = index === TABLE_ROWS.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";

                          return (
                            <tr key={name}>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {name}
                                </Typography>
                              </td>
                              <td className={`${classes} bg-blue-gray-50/50`}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {job}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {date}
                                </Typography>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Card>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
          <Button>Button</Button>
        </div>

        <div className="r-time">
          <div className="r-event">
            <ul class="timeline">
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">April 2011 - heute</p>
                  <h3>Geil,Danke! GmbH</h3>
                  <p>Smartphones und Tablets (iOS, Android, Windows).</p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">
                    November 2009 - März 2011
                  </p>
                  <h3>Freelancer</h3>
                  <p>
                    Konzeption, Design und Produktion von Digitalen Magazinen
                    mit
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">April 2011 - heute</p>
                  <h3>konplan gmbh</h3>
                  <p>
                    Modellierung von Systemen und APIs für Digital Publishing
                    und
                  </p>
                </div>
              </li>
            </ul>
            <button className="btn">All event</button>
          </div>
        </div>

        <div className="map">
          <span>Hello</span>
        </div>
      </div>
    </section>
  );
};

export default Information;
