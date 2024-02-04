import { FC } from "react";
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

  return (
    <div style={{ height: "100vh", borderRadius: "20px" }}>
      <Header />
      <div></div>
      <h2 style={{ paddingLeft: "2rem" }}>Recent Students</h2>
      <section style={{ paddingLeft: "2rem" }} className="student-card_grid">
        {students.map((student) => (
          <StudentCard
            avatar={student.studentName}
            studentName={student.studentName}
            grade={student.grade}
            age={student.age}
            code={student.code}
            bio={student.bio}
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
