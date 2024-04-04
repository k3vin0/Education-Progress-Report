import { FC } from "react";
import { generateStudentArray } from "../../data/students";
import StudentCard from "../../components/StudentCard/StudentCard";
import CLSimplePageTemplate from "../../components/global/Layout/CLSimplePageTemplate";
import { Button } from "@mui/material";

export type HomePageProps = Record<string, never>;

export const HomePage: FC<HomePageProps> = () => {
  const students = generateStudentArray(4);
  const HeaderButton = <Button>Hi</Button>;

  return (
    <CLSimplePageTemplate
      title="Recent Students"
      titleHeaderRight={HeaderButton}
    >
      <section className="grid grid-cols-auto-fit-minmax-340 auto-rows-400 gap-4 pb-4">
        {students.map((student, index) => (
          <StudentCard
            key={`${index.toString()}-${student.studentName}`}
            avatar={student.studentName}
            studentName={student.studentName}
            grade={student.grade}
            age={student.age}
            code={student.code}
            bio={student.bio}
          />
        ))}
      </section>
    </CLSimplePageTemplate>
  );
};

export default HomePage;
