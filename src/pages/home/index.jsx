import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Avatar, Box, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import CarouselComponent from "../../components/Slider";
import { ButtonBorder } from "../../components/shared/ButtonCustom";
import {
  Container10,
  Container100,
  Container1140,
  Container1200,
  ContainerFluid
} from "../../components/shared/CustomContainer";
import TitleSection from "../../components/shared/TitleSection";
import { useStylesGloble } from "../../global.style";
import { useStyles } from "./home.style";
import {
  aboutUsData,
  counterData,
  ourNumberData,
  partnerBrandsData,
  servicesData,
  settingsMainSlider,
  settingsPartnerBrandsSlider,
  settingsProductsSlider,
  settingsTestiSlider,
  slidesMain,
  slidesProducts,
  tabsContentVisionMissoin,
  tabsVisionMissoin,
  testimonialsData,
  WhyChooseData
} from "./homeData";
import { useDispatch, useSelector } from "react-redux";
import { fetchSliders } from "../../state-management/admin/slider/getAllSliders/sliderActions";
import noImage from "../../assets/bg/no-banner.jpg"
import { Loader } from "../../components/shared/Loader";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import VerticalTabs from "../../components/TabVertical";

const Home = () => {
  const global = useStylesGloble();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [imgError, setError] = useState(false);

  // Main Slider 
  const MainSlider = useSelector((state) => state.allSlider);
  // const { loading, sliders, error } = sliderState;

  useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  // console.log("sliders____", sliders)

  // useEffect(() => {
  //   const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       scroll: "smooth",
  //     });
  //   };

  //   scrollToTop();
  //   return () => { };
  // }, []);


  console.log("MainSlider.sliders", MainSlider.sliders?.length)
  return (
    <>
      {/* main Slider  */}

      <CarouselComponent settings={settingsMainSlider} slides={slidesMain}>
        {slidesMain.map((slide, index) => (
          <Box key={index} className={global.slide}>
            <img className={global.bannerImg} src={slide.image} alt="" />
          </Box>
        ))}
      </CarouselComponent>


      {/* GROW MORE Agrichem India Pvt. Ltd. */}
      <Container1200 className={classes.growMoreBg + " py-16 "} >
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box className={classes.headingWithLine + ' ' + 'flex gap-5 items-center'}>
              <Box className={classes.home_welcome}>
                <div className="flex gap-5">
                  <div className="servece_0111 mt-[15px] mb-5" ></div>
                  <span>GROW MORE Agrichem India Pvt. Ltd.</span>
                </div><br />
                <h1>Organic Bio Fertilizer</h1>
                <p className="tagline">Largely most of the farmers know that soil health is critical to their business.</p>
                <p>“We are not treating the plant, we are treating the  soil. We feel if you treat the soil right and if you take care of the soil,  your crops will definitely rise”.</p><br />

              </Box>

            </Box>
            <ButtonBorder>Read More...</ButtonBorder>
          </Grid>
          <Grid item xs={5}>
            <Box className={classes.imagesSec}>
              <img src={`${process.env.PUBLIC_URL}/images/about/about.webp`} alt={"image"} />
            </Box>
          </Grid>
        </Grid>
      </Container1200>


      {/* Service  */}
      <Container1200 className={global.my40}>
        <TitleSection title={"Organic Bio Fertilizers"} />
        <Box className={classes.blogStyleParent}>
          <ServiceCard data={servicesData} />
        </Box>
      </Container1200>


      {/* Counter */}
      <Container1200 className={classes.counterBg + "  "} >
        <Grid container spacing={1}>
          <Grid item xs={10} className="counter-green  ">
            <Grid container spacing={2} >
              {counterData.map((db, index) => (
                <Grid item xs={4}>
                  <Box className={classes.counter + '  text-white '}>
                    <div className="number flex gap-5 items-center mb-2">
                      {db.icon}
                      <h1 className="ct-counter-number">{db.count}</h1>
                    </div>
                    <h3 className="text-[18px] leading-6">{db.title}</h3>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={2} className="counter-yellow ">
            <Box className="">
              <div className="number flex gap-2 items-center mb-2">
                <PhoneIphoneIcon sx={{ width: '44px', height: 'auto' }} />
                <h1 className="text-2xl leading-7">Call for help!</h1>
              </div>
              <h3 className="text-xl font-extrabold">+91 78638 93739</h3>
            </Box>
          </Grid>
        </Grid>
      </Container1200>

      {/* Vision Mission  */}
      <Container1200 className={classes.visionMission + ' ' + "pt-[100px] pb-[150px]  "} >
        <VerticalTabs tabs={tabsVisionMissoin} content={tabsContentVisionMissoin} />
      </Container1200>

      {/* Products */}
      <Box className={classes.productsSliderStyle}>
        <TitleSection title={"Wide Range of Products"} className={"productTitle"} />

        <Container1200 className={"  "} >
          <CarouselComponent settings={settingsProductsSlider} >
            {slidesProducts.map((slide, index) => (
              <Box key={index} className={global.productSlider}>
                <Box className="prod-img">
                  <img className={global.bannerImg} src={slide.image} alt="" />
                </Box>
                <Box className={"content-sec"}>
                  <h4 className="title">{slide.content}</h4>
                </Box>
              </Box>
            ))}
          </CarouselComponent>
        </Container1200>
      </Box>

      {/* Why Choose GROW MORE ? */}
      <Box className={classes.whyChooseStyle}>
        <TitleSection title={"Why Choose GROW MORE ?"} className={"productTitle"} />
        <div className="servece-0111" />
        <Container1200 className={"  "} >
          <Grid container spacing={2}>
            {WhyChooseData && WhyChooseData.map((db, index) => (
              <Grid item xs={3}>
                <Box className={"whyChooseBox"}>
                  <Box className="list-icon">{db.icon}</Box>
                  <h3 className="title">{db.title}</h3>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container1200>
      </Box>




      {/* Testimonials */}
      {/* <Container1140 className={global.mb70}>
        <TitleSection title={"Testimonials"} />
        <CarouselComponent settings={settingsTestiSlider}>
          {testimonialsData.map((slide, index) => (
            <Box className={classes.testimonial}>
              {slide.image ? <Avatar alt={slide.title} src={slide.image} /> :
                <Avatar alt={slide.title} src={'/'} />}
              <Box key={index} className={classes.testiSliderStyle}>
                <FormatQuoteIcon />
                <p className="description">{slide.description}</p>
                <h4 className="title">{slide.title}</h4>
              </Box>
            </Box>
          ))}
        </CarouselComponent>
      </Container1140> */}

      {/* Partner Brands */}
      {/* <Container10 className={global.pt20 + ' ' + global.mb70}>
        <Box className={classes.brandStyle}>
          <TitleSection title={"Partner Brands"} />
          <CarouselComponent settings={settingsPartnerBrandsSlider}>
            {partnerBrandsData.map((slide, index) => (
              <Box key={index} className={classes.mainSlide}>
                <img className={classes.bannerImg} src={slide.image} alt="" />
              </Box>
            ))}
          </CarouselComponent>
          <Box className={classes.brandBtn}>
            <ButtonBorder>Knore More</ButtonBorder>
          </Box>
        </Box>
      </Container10> */}

      {/* Our Blog */}
      {/* <Container1320 className={global.my70}>
        <TitleSection title={"Our Blog"} subTitle={"Knowledge is Power"} />
        <Box className={classes.blogStyleParent}>
          <BlogCard data={blogData} />
        </Box>
      </Container1320> */}
    </>
  );
};

export default Home;
