const IntroDetail = () => {
  return (
    <div className="absolute flex justify-center overflow-hidden items-center bottom-0 left-0 w-full py-12">
      <div className="bg-white px-4 w-[70vw] py-4 rounded overflow-hidden  grid grid-cols-3">
        {/* First Grid */}
        <div className="py-4 px-2">
          <div className="bg-gray-100 py-3 px-6 rounded">
            <div className="border-b-2 pb-2 border-dotted border-black">
              <h1 className="font-semibold text-lg">Personal Details</h1>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h1 className="font-medium text-gray-800">Email:</h1>
                <p className="m-0 text-gray-600">
                  priyanshuchourasia916@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-1">
                <h1 className="font-medium text-gray-800">Languages:</h1>
                <p className="m-0 text-gray-600">Hindi,English</p>
              </div>
              <div className="flex items-center gap-1">
                <h1 className="font-medium text-gray-800">Nationality:</h1>
                <p className="m-0 text-gray-600">Indian</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Grid it have two grid spaces */}
        <div className="col-span-2 px-2">
          <h1 className="text-xl font-medium">
            I Am{" "}
            <span className="font-bold text-teal-500">Software Developer</span>
          </h1>
          <p className="break-words">
            I am a passionate software developer with a deep love for building
            meaningful and efficient software solutions. My drive comes from the
            joy of transforming complex ideas into functional, user-friendly
            applications. I’m constantly exploring new technologies and best
            practices, always aiming to enhance my skill set and stay on the
            cutting edge of the industry. I believe in writing clean,
            maintainable code and continuously improving through every project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroDetail;
