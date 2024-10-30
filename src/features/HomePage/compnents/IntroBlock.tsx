import { Container } from "@/constants/containers/wrapper/Container";
import userBg from "@/assets/userProfile.png";
import HomeCss from "../styles/HomePageCss.module.css";
import { Button } from "@chakra-ui/react";
import IntroDetail from "./IntroDetail";

const IntroBlock = () => {
  return (
    <Container className="h-[100vh] relative overflow-hidden">
      <div className={HomeCss.imageBg}>
        <div className="flex flex-col items-center justify-center">
          <div>
            <figure className="flex flex-col cursor-pointer justify-center items-center">
              <img
                src={userBg}
                alt="User profile"
                className="w-36 h-36 rounded"
              />
              <figcaption className="font-semibold text-4xl">
                Here I am Priyanshu Chourasia
              </figcaption>
              <figcaption className="my-2 font-medium text-xl">
                I am a Passionate{" "}
                <span className="font-bold text-2xl text-teal-500">
                  Software Developer
                </span>
              </figcaption>
            </figure>
          </div>

          {/* This is resume download button to download CV  */}
          <div className="mt-3">
            <Button className="!bg-teal-600 hover:!shadow-centerShadow">
              <a
                className="text-gray-300 hover:text-gray-200"
                href="/PriyanshuChourasiaResume.pdf"
                download="PriyanshuChourasiaResume.pdf"
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <h1>My Blogs</h1>
          </div>
        </div>
      </div>
      <IntroDetail/>
    </Container>
  );
};

export default IntroBlock;
