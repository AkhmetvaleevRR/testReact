import { useReducer, useState } from "react";
import { Counter } from "../counter/counter";

interface initialFormProps {
  name: string;
  text: string;
  address: string;
}

const INITIAL_FORM: initialFormProps = {
  name: "",
  text: "",
  address: "",
};

type ReviewFormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_TEXT"; payload: string }
  | { type: "SET_ADDRESS"; payload: string }
  | { type: "CLEAR_FORM" };

const reducer = (
  state: initialFormProps,
  action: ReviewFormAction
): initialFormProps => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.payload,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "CLEAR_FORM":
      return INITIAL_FORM;
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [reviewCount, setReviewCount] = useState(0);
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const { name, text, address } = form;

  const setName = (name: string) =>
    dispatch({ type: "SET_NAME", payload: name });
  const setText = (text: string) =>
    dispatch({ type: "SET_TEXT", payload: text });
  const setAddress = (address: string) =>
    dispatch({ type: "SET_ADDRESS", payload: address });
  const ClearForm = () => dispatch({ type: "CLEAR_FORM" });

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <label>name</label>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div>
        <label>adress</label>
        <input
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
      </div>
      <div>
        <label>text</label>
        <input
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </div>
      <Counter
        max={5}
        value={reviewCount}
        onIncrement={() => setReviewCount(reviewCount + 1)}
        onDecrement={() => setReviewCount(reviewCount - 1)}
      />
      <button onClick={ClearForm}>clear form</button>
    </form>
  );
};
