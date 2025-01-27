import React, { useState } from "react";

const App = () => {
  // State to track whether to show all items or not
  const [showAll, setShowAll] = useState(false);

  // Function to toggle showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Data for your images and their corresponding names
  const imagesWithNames = [
    { src: "/pngegg (1).png", name: "React" },
    { src: "/pngegg (13).png", name: "Github" },
    { src: "/pngegg (3).png", name: "Java" },
    { src: "/pngegg (4).png", name: "NodeJS" },
    { src: "/pngegg (5).png", name: "Javascript" },
    { src: "/pngegg (11).png", name: "HTML" },
    { src: "/pngegg (7).png", name: "SQL" },
    { src: "/pngegg (8).png", name: "MongoDB" },
    { src: "/pngegg (9).png", name: "Python" },
    { src: "/pngegg (12).png", name: "CSS" },
    { src: "/pngegg (6).png", name: "Docker" },
    { src: "/pngegg (10).png", name: "Figma" },
    { src: "/aws.png", name: "AWS" },
    { src: "/pngegg (14).png", name: "Postman" },
    { src: "/pngegg (14).png", name: "DSA" },
  ];

  // Render only the first 8 items if showAll is false, otherwise render all items
  const renderImages = showAll ? imagesWithNames : imagesWithNames.slice(0, 10);

  return (
    <div className=" pt-20 pb-20 pr-40 pl-40 ml-20 mr-20 text-center">
      <ul className="flex gap-28 flex-wrap justify-around items-center">
        {renderImages.map((image, index) => (
          <div key={index}>
            <li className="border-none rounded-lg bg-gray-800">
              <img src={image.src} alt="" className="h-20 w-20" />
            </li>
            <div className="mt-10">
              <span className="text-white font-medium text-xl ">
                {image.name}
              </span>
            </div>
          </div>
        ))}
      </ul>
      {/* Show "View All" button if there are more than 8 items */}
      {imagesWithNames.length > 8 && (
        <button
          onClick={toggleShowAll}
          className="bg-[#B700FB] text-white px-8 py-2 mt-16 mb-12 rounded font-lg text-xl hover:bg-[#b800fbad]">
          {showAll ? "Show Less" : "View All"}
        </button>
      )}
    </div>
  );
};

export default App;
