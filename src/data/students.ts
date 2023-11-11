import { StudentCardProps } from "../components/StudentCard/StudentCard";
import { DisabilityCodes } from "../types";

// Utility function to get a random enum value
const getRandomEnumValue = <T>(enumObj: T): T[keyof T] => {
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
  return new Array(numStudents).fill(null).map((): StudentCardProps => {
    return {
      avatar: `https://i.pravatar.cc/150?u=${Math.random()}`, // Using a random image generator service
      studentName: generateRandomName(),
      grade: Math.floor(Math.random() * 12) + 1,
      age: Math.floor(Math.random() * 5) + 15,
      code: getRandomEnumValue(DisabilityCodes),
    };
  });
};

// Example: Generate an array of 10 students
// const students = generateStudentArray(10);
// console.log(students);
