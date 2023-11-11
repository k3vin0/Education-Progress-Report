import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { StudentDataTable } from "./components";
import { generateStudentArray } from "../../data/students";
import StudentCard from "../../components/StudentCard/StudentCard";
import "./index.scss";
import { Header } from "../../components/global/Header";

export type HomePageProps = object;

export const HomePage: FC<HomePageProps> = () => {
  const students = generateStudentArray(4);
  const studentBios = [
    "With a passion for music and a diagnosis of Autism Spectrum Disorder, this vibrant individual communicates best through melodies and rhythms. ",

    "Cheerful demeanor and determination are standout qualities in this student with Intellectual Disability. Excelling in a special education program, especially enjoying art projects.",

    "A love for being on the move characterizes this energetic child with Down Syndrome. A keen interest in sports has led to shining moments in adaptive physical education classes, particularly in track events.",

    "This student with a Specific Learning Disability in reading and writing has found success through assistive technology. Learns best with the help of a tablet and specialized apps .",
  ];

  const getRandomBio = () => {
    const randomIndex = Math.floor(Math.random() * studentBios.length);
    return studentBios[randomIndex];
  };
  return (
    <div style={{ height: "100vh", paddingLeft: "2rem", borderRadius: "20px" }}>
      <Header />
      <h2>Recent Students</h2>
      <section className="student-card_grid">
        {students.map((student) => (
          <StudentCard
            avatar={student.studentName}
            studentName={student.studentName}
            grade={student.grade}
            age={student.age}
            code={student.code}
            bio={getRandomBio()}
          />
        ))}
      </section>
    </div>
  );
};

export default HomePage;

<Grid container spacing={2} sx={{ height: "100%" }}>
  <Grid item xs={6} sx={{ height: "100%" }}>
    <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
      <StudentDataTable />
    </Paper>
  </Grid>
  <Grid item xs={6} sx={{ height: "97.2%" }}>
    <Paper elevation={3} sx={{ width: "100%", height: "50%", mb: 2 }}>
      {" "}
      {/* mb here is for margin-bottom */}
      IEP Templates
    </Paper>
    {/* Adding a margin to the bottom of the first Paper component creates a gap */}
    <Paper elevation={3} sx={{ width: "100%", height: "50%" }}>
      Resources
    </Paper>
  </Grid>
</Grid>;
