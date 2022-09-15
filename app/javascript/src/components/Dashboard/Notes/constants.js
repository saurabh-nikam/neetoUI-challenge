import * as Yup from "yup";

const ProfilePicture = "https://i.pravatar.cc/300";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: "",
  tags: "",
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

export const NOTES_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  assignedContact: Yup.object().required("Assigned Contacts is required"),
  tags: Yup.array()
    .min(1, "Choose Atleast 1")
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
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
    profilePicture: ProfilePicture,
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    desc: '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    executionStatus: "Getting Started",
    status: "Drafted",
    createdAt: "2022-09-13T16:41:57+02:00",
    createdBy: "Oliver Smith",
    profilePicture: ProfilePicture,
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    desc: '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    executionStatus: "Completed",
    status: "Completed",
    createdAt: "2022-09-12T14:41:57+02:00",
    createdBy: "Oliver Smith",
    profilePicture: ProfilePicture,
  },
  {
    id: 4,
    title: "How to claim the warranty?",
    desc: '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    executionStatus: "Completed",
    status: "Closed",
    createdAt: "2022-09-11T13:41:57+02:00",
    createdBy: "Oliver Smith",
    profilePicture: ProfilePicture,
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
