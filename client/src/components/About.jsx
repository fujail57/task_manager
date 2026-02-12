import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50  space-y-5">
      <h1 className="font-black text-4xl">Task Manager</h1>
      <h3 className="font-semibold text-2xl">Stay organized. Stay productive.</h3>
      <p className="w-2xl mx-auto">
        Keep track of your daily tasks, set priorities, and never miss a
        deadline. Manage your time efficiently and turn your to-do list into
        done.
      </p>
    </div>
  );
};
