import { Box } from "@mui/material";
import React, { useEffect } from "react";
import CarouselComponent from "../../components/Slider/index";
import CustomTabs from "../../components/service-tab/tab";
import {
  Container100,
  Container1140
} from "../../components/shared/CustomContainer";
import { useStylesGloble } from "../../global.style";
import { settingsSlider, slidesMain } from "./serviceData";

const Services = () => {
  const global = useStylesGloble();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        scroll: "smooth",
      });
    };

    scrollToTop();
    return () => {};
  }, []);

  return (
    <>
      <Container1140>
        <CustomTabs />
      </Container1140>
      <Container100 className={global.rootServices}>
        <CarouselComponent settings={settingsSlider} slides={slidesMain}>
          {slidesMain.map((slide, index) => (
            <Box key={index} className={global.slide}>
              <img className={global.bannerImg} src={slide.image} alt="" />
            </Box>
          ))}
        </CarouselComponent>
      </Container100>
    </>
  );
};

export default Services;
