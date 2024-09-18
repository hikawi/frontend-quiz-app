import { persistentMap } from "@nanostores/persistent";

type Quiz = {
  subject: string;
  score: number;
};

const quizInitial: Quiz = {
  subject: "",
  score: 0,
};

const $quiz = persistentMap<Quiz>("quiz:", quizInitial, {
  encode: JSON.stringify,
  decode: (val) => {
    try {
      return JSON.parse(val);
    } catch {
      return val;
    }
  },
});

export { $quiz };
