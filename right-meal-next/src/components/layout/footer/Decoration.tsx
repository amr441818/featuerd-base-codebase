import React from "react";

const Decoration = () => {
  return (
    <>
      {/* decorations */}
      <div className="ellipse bg-[#1d3f5fd0] w-[175px] h-[175px] md:w-[357px] md:h-[357px] rounded-full absolute bottom-[60px] start-[60px] md:start-[30px] z-[0]"></div>
      <div className="ellipse bg-[#17395bb1] w-[240px] h-[240px] md:w-[456px] md:h-[456px] rounded-full absolute bottom-[60px] start-[-100px] md:start-[-200px] z-[0]"></div>
      <div className="ellipse bg-[#304d68cb] w-[75px] h-[75px] md:w-[131px] md:h-[131px] rounded-full absolute bottom-[10px] start-[-55px] z-[0]"></div>
      <div className="ellipse bg-[#1d3f5fbe] w-[240px] h-[240px] md:w-[456px] md:h-[456px] rounded-full absolute bottom-[35px] start-[120px] md:start-[20px] z-[0]"></div>
    </>
  );
};

export default Decoration;
