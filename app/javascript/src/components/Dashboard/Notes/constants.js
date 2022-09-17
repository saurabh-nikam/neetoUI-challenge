import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object({ label: yup.string().required(), value: yup.string().required() })
    .nullable()
    .required("Assigned one contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(""),
        value: yup.string().required(""),
      })
    )
    .min(1, "Atleast one tag required")
    .required("Tag is required"),
});

export const NOTES = [
  {
    id: 1,
    title: "How to claim the warranty?",
    desc: '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    executionStatus: "Getting Started",
    status: "Created",
    createdAt: "2022-09-14T16:41:57+02:00",
    createdBy: "Oliver Smith",
    profilePicture: "https://i.pravatar.cc/300",
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    desc: '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    executionStatus: "Getting Started",
    status: "Drafted",
    createdAt: "2022-09-13T16:41:57+02:00",
    createdBy: "Oliver Smith",
    profilePicture: "https://i.pravatar.cc/300",
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    desc: '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    executionStatus: "Completed",
    status: "Completed",
    createdAt: "2022-09-12T14:41:57+02:00",
    createdBy: "Oliver Smith",
    profilePicture: "https://i.pravatar.cc/300",
  },
  {
    id: 4,
    title: "How to claim the warranty?",
    desc: '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    executionStatus: "Completed",
    status: "Closed",
    createdAt: "2022-09-11T13:41:57+02:00",
    createdBy: "Oliver Smith",
    profilePicture: "https://i.pravatar.cc/300",
  },
];

export const TAGS = [
  { value: "gettingstarted", label: "Getting Started" },
  { value: "onboarding", label: "Onboarding" },
  { value: "userflow", label: "User Flow" },
  { value: "ux", label: "UX" },
  { value: "bugs", label: "Bugs" },
  { value: "v2", label: "V2" },
];

export const CONTACTS = [
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "hr", label: "HR" },
  { value: "techlead", label: "Tech Lead" },
];
