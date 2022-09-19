import { v4 as uuidFun } from "uuid";

export const PERSONS_DATA = [
  {
    name: "Ronald Richards",
    role: "Owner",
    imageUrl: "https://i.pravatar.cc/300?img=52",
    email: "ronaldrichards@borer.com",
    createdAt: "Feb 5, 2021",
  },
  {
    name: "Jacob Jones",
    role: "User",
    imageUrl: "https://i.pravatar.cc/300?img=47",
    email: "jacobjones@borer.com",
    createdAt: "Feb 5, 2021",
  },
];

export const CONTACT_DETAILS = Array(30)
  .fill(PERSONS_DATA)
  .flat()
  .map(details => ({
    id: uuidFun(),
    ...details,
  }));
