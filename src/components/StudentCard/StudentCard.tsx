import React, { FC } from "react";
import { DisabilityCodes } from "../../types";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import StudentImge from "../../assets/images.jpeg";

export type StudentCardProps = {
  avatar: string;
  studentName: string;
  grade: number;
  age: number;
  code: DisabilityCodes;
  bio: string;
};

export const StudentCard: FC<StudentCardProps> = ({
  studentName,
  age,
  bio,
}) => {
  return (
    <Card
      elevation={3}
      sx={{ width: "100%", height: "100%", borderRadius: "1rem" }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {studentName.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={studentName}
        subheader={`Age: ${age}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={StudentImge}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
      </CardContent>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: ".5rem",
          }}
        >
          <span>{age}</span>
          <span>{grade}</span>
        </div>
        <div style={{ paddingLeft: ".5rem", paddingBottom: ".5rem" }}>
          <Avatar src={avatar} />
        </div>
      </div> */}
    </Card>
  );
};

export default StudentCard;
