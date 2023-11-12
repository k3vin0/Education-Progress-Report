import { StudentCardProps } from "../components/StudentCard/StudentCard";
import { DisabilityCodes } from "../types";

// Utility function to get a random enum value
const getRandomEnumValue = <T extends object>(enumObj: T): T[keyof T] => {
  const values = Object.keys(enumObj).map((key) => enumObj[key as keyof T]);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};

// Function to generate a random student name
const generateRandomName = (): string => {
  const firstNames = [
    "Alex",
    "Jamie",
    "Jordan",
    "Taylor",
    "Casey",
    "Riley",
    "Morgan",
    "Avery",
    "Reese",
    "Bailey",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
  ];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

// Function to generate an array of StudentCardProps objects
export const generateStudentArray = (
  numStudents: number
): StudentCardProps[] => {
  const studentBios = [
    "With a passion for music and a diagnosis of Autism Spectrum Disorder, this vibrant individual communicates best through melodies and rhythms. ",

    "Cheerful demeanor and determination are standout qualities in this student with Intellectual Disability. Excelling in a special education program, especially enjoying art projects.",

    "A love for being on the move characterizes this energetic child with Down Syndrome. A keen interest in sports has led to shining moments in adaptive physical education classes, particularly in track events.",

    "This student with a Specific Learning Disability in reading and writing has found success through assistive technology. Learns best with the help of a tablet and specialized apps .",
  ];
  const bio = studentBios[Math.floor(Math.random() * studentBios.length)];
  return new Array(numStudents).fill(null).map((): StudentCardProps => {
    return {
      avatar: `https://i.pravatar.cc/150?u=${Math.random()}`, // Using a random image generator service
      studentName: generateRandomName(),
      grade: Math.floor(Math.random() * 12) + 1,
      age: Math.floor(Math.random() * 5) + 15,
      code: getRandomEnumValue(DisabilityCodes),
      bio: bio,
    };
  });
};

// Example: Generate an array of 10 students
// const students = generateStudentArray(10);
// console.log(students);
