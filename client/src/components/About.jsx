// import React from "react";

// export const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50  space-y-5">
//       <h1 className="font-black text-4xl">Task Manager</h1>
//       <h3 className="font-semibold text-2xl">Stay organized. Stay productive.</h3>
//       <p className="w-2xl mx-auto">
//         Keep track of your daily tasks, set priorities, and never miss a
//         deadline. Manage your time efficiently and turn your to-do list into
//         done.
//       </p>
//     </div>
//   );
// };


import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10 text-center space-y-4">
      
      <h1 className="font-black text-3xl sm:text-4xl md:text-5xl">
        Task Manager
      </h1>

      <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-700">
        Stay organized. Stay productive.
      </h3>

      <p className="max-w-md sm:max-w-xl md:max-w-2xl text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        Keep track of your daily tasks, set priorities, and never miss a
        deadline. Manage your time efficiently and turn your to-do list into
        done.
      </p>

    </div>
  );
};
