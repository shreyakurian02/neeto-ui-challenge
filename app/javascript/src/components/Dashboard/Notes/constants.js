import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const NOTES_COMMON_MENU = [
  { label: "All", count: 200 },
  { label: "Users", count: 80 },
  { label: "Leads", count: 60 },
  { label: "Visitors", count: 60 },
];

export const NOTES_SEGMENTS_MENU = [
  { label: "Europe", count: 80 },
  { label: "Middle-East", count: 60 },
  { label: "Asia", count: 60 },
];

export const NOTES_TAGS_MENU = [
  { label: "Sales", count: 80 },
  { label: "Finance", count: 60 },
  { label: "User Experience", count: 60 },
];

export const NOTES = [
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    status: "Created",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    status: "Drafted",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    status: "Drafted",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    status: "Drafted",
  },
];

export const USER_AVATAR_URL =
  "https://randomuser.me/api/portraits/women/80.jpg";
