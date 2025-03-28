import { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobby":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      return currentState;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(state);
    // Reset form
    // dispatch({ type: "resetForm" });
  };
  return (
    <div className="min-h-screen flex justify-center items-center my-10 gap-10">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          className="border-2 border-purple-500 p-2 "
          placeholder="Name"
          id="name"
          name="name"
        />
        <label htmlFor="age">Age:</label>
        <input
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          type="number"
          className="border-2 border-purple-500 p-2 "
          placeholder="Age"
          id="age"
          name="age"
        />
        <label htmlFor="hobbies">Hobbies:</label>
        <input
          onBlur={(e) =>
            dispatch({ type: "addHobby", payload: e.target.value })
          }
          type="text"
          className="border-2 border-purple-500 p-2 "
          placeholder="Hobbies"
          id="hobbies"
          name="hobbies"
        />
        <button type="submit" className="bg-purple-600 text-white py-2">
          Submit
        </button>
      </form>
      <div>
        <p>User Info: </p>
      </div>
    </div>
  );
};

export default UserInfoWithUseReducer;
