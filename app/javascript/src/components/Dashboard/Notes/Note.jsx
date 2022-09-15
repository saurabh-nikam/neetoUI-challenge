import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Tag, Avatar, Tooltip, Dropdown } from "neetoui";

import { calculateCreatedAgo, formatDatetoWeekdayTime } from "./utils";

const Note = ({ note }) => (
  <div className="mb-3 box-border w-full border border-gray-300 bg-white p-4 shadow-sm">
    <div className="flex justify-between">
      <Typography style="h4">{note.title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical} position="bottom-end">
        <li>Edit</li>
        <li>Delete</li>
      </Dropdown>
    </div>
    <div className="mt-1 mb-3" style={{ color: "#68737D" }}>
      <Typography style="body2">{note.desc}</Typography>
    </div>
    <hr />
    <div
      className="mt-3 flex flex-row items-center"
      style={{ color: "#68737D" }}
    >
      <div className="mt-2 flex-grow items-start">
        <Tag label={note.executionStatus} />
      </div>
      <div className="mt-1.5 flex flex-row items-center">
        <div className="m-1 flex flex-row items-center space-x-1">
          <Clock size={15} />
          <Tooltip
            content={formatDatetoWeekdayTime(note.createdAt)}
            hideAfter={5000}
            position="bottom"
          >
            <Typography style="body2">
              {note.status}
              {` `}
              {calculateCreatedAgo(note.createdAt)}
            </Typography>
          </Tooltip>
          <Avatar
            size="small"
            user={{
              imageUrl: note.profilePicture,
              name: note.createdBy,
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Note;
