import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Dropdown, Typography, Avatar } from "neetoui";

export const buildContactTableColumnData = showAlert => [
  {
    title: "Name & Role",
    width: "30%",
    key: "name",
    dataIndex: "name",
    render: (name, { role, imageUrl }) => (
      <div className="flex space-x-3">
        <Avatar size="large" user={{ imageUrl, name }} />
        <div>
          <Typography style="h4">{name}</Typography>
          <Typography style="body2">{role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    width: "30%",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Created At",
    width: "30%",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "",
    width: "10%",
    key: "more",
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <li className="m-1">Edit</li>
        <li
          className="m-1"
          onClick={() => {
            showAlert();
          }}
        >
          Delete
        </li>
      </Dropdown>
    ),
  },
];
