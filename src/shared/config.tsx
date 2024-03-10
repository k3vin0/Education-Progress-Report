import HouseIcon from "@mui/icons-material/HouseTwoTone";
import SchoolIcon from "@mui/icons-material/SchoolTwoTone";
import ArticleIcon from "@mui/icons-material/ArticleTwoTone";

export const ComponentConfigurations = {
  navItems: [
    { label: "Home", link: "/home", icon: <HouseIcon color="warning" /> },
    {
      label: "Students",
      link: "/students",
      icon: <SchoolIcon color="warning" />,
      children: [
        { label: "Home", link: "/home", icon: <HouseIcon color="warning" /> },
        { label: "Students", link: "/students" },
        { label: "IEP's", link: "/ieps" },
      ],
    },
    { label: "IEP's", link: "/ieps", icon: <ArticleIcon color="warning" /> },
  ],
  avatarMenuOptions: [
    { label: "Profile" },
    { label: "Account" },
    { label: "Logout" },
  ],
  // Other configurations can be added here
};

export const APIConfigurations = {
  apiUrl: "https://api.example.com",
  apiKey: "your-api-key",
  // Other API configurations can be added here
};

// You can add more configurations similarly
