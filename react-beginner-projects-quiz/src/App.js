import "./index.scss";
import React from "react";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },

  {
    title: "Где правильно создан компонент?",
    variants: [
      "React.Component {}",
      "class App extends React.Component {}",
      "class App {}",
    ],
    correct: 1,
  },
  {
    title: "Какая компания разработала React JS?",
    variants: [
      "Amazon",
      "Facebook",
      "Google",
    ],
    correct: 1,
  },
  {
    title: "Куда можно встроить готовый код из метода render()?",
    variants: [
      "Только в div",
      "Только в тег, у которого есть id",
      "В любой тег",
    ],
    correct: 2,
  },
  {
    title: "Какой метод отвечает за вывод информации через React JS компонент?",
    variants: [
      "render",
      "react",
      "ReactDOM",
    ],
    correct: 0,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
      <button>Попробовать снова</button>
      </a>
      
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  console.log(percentage);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}?</h1>
      <ul>
        {question.variants.map((e, index) => (
          <li onClick={() => onClickVariant(index)} key={e}>
            {e}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if(index === question.correct){
      setCorrect(correct + 1) 
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct = {correct}/>
      )}
     
    </div>
  );
}

export default App;
