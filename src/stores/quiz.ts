import { persistentMap } from "@nanostores/persistent";

const $quizData = persistentMap("quiz:", {
  subject: "",
  score: "0",
});

export { $quizData };
