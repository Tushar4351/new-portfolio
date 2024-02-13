
//Separeate Homesection component to use Framer motion

const HomeSection = () => {
  return (
    <div className="flex flex-col gap-4 outer-div ">
      <div className="lg:h-full bg-gray1 rounded-2xl outer-div relative overflow-hidden">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="flex flex-col p-7 sm:p-10 mt-10 gap-14">
          <div
            className="text-black1 text-upper font-argenBold text-4xl sm:text-6xl md:text-7xl"
          >
            I’m Tushar Bhowal A-{" "}
            <span className="text-principal">Full Stack Web Developer</span>
          </div>
          <div className="text-black1 font-argenMed text-base sm:text-xl xxsm:pr-24">
            I care a lot about using my development skills for positive impact,
            and enjoy creating user-centric, delightful, and human experiences.
          </div>
        </div>
        <div className="flex button-container flex-row p-5 xxsm:p-7 sm:p-10 mt-10 gap-7 sm:gap-10">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-7 py-3 overflow-hidden font-medium transition-all bg-black2 rounded-full hover:bg-Blanc group"
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-Blanc rounded-full"></span>
            <span className="relative w-full text-left download text-sm sm:text-xl transition-colors duration-200 ease-in-out text-Blanc group-hover:text-black2">
              Download CV
            </span>
          </a>
          <div className="flex social-icons flex-row gap-5 justify-center">
            <i className="fa-brands fa-facebook text-xl sm:text-4xl bg-Blanc rounded-full px-3 py-2 sm:px-3 sm:py-2 text-black2"></i>
            <i className="fa-brands fa-square-instagram text-xl sm:text-4xl bg-Blanc rounded-full px-3 py-2 sm:px-3 sm:py-2 text-black2"></i>
            <i className="fa-brands fa-linkedin text-xl sm:text-4xl bg-Blanc rounded-full px-3 py-2 sm:px-3 sm:py-2 text-black2"></i>
            <i className="fa-brands fa-github text-xl sm:text-4xl bg-Blanc rounded-full px-3 py-2 sm:px-3 sm:py-2 text-black2"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
