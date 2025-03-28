import { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({ name: "", age: "", hobbies: [] });

  return (
    <div className="min-h-screen flex justify-center items-center my-10 gap-10">
      <form className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={user.name}
          className="border-2 border-purple-500 p-2 "
          placeholder="Name"
          id="name"
          name="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          value={user.age}
          className="border-2 border-purple-500 p-2 "
          placeholder="Age"
          id="age"
          name="age"
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <label htmlFor="hobbies">Hobbies:</label>
        <input
          onBlur={(e) =>
            setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
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
        <p>User Info: {JSON.stringify(user)}</p>
      </div>
    </div>
  );
};

export default UserInfoWithUseState;
