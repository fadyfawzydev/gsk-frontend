export const questionBank = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
      { text: "O2", correct: false },
    ],
  },
];
export interface Student {
  id: string;
  name: string;
  avatar: string;
  score: number;
}

export const mockStudents: Student[] = [
  { id: "1", name: "John Doe", avatar: "john.jpg", score: 1065 },
  { id: "2", name: "Alice Smith", avatar: "alice.jpg", score: 1285 },
  { id: "3", name: "Bob Johnson", avatar: "bob.jpg", score: 978 },
  { id: "4", name: "Emma Brown", avatar: "emma.jpg", score: 89 },
  { id: "5", name: "Michael Wilson", avatar: "michael.jpg", score: 95 },
  { id: "6", name: "Sophia Lee", avatar: "sophia.jpg", score: 81 },
  { id: "7", name: "William Davis", avatar: "william.jpg", score: 87 },
  { id: "8", name: "Olivia Rodriguez", avatar: "olivia.jpg", score: 93 },
  { id: "9", name: "James Martinez", avatar: "james.jpg", score: 76 },
];
