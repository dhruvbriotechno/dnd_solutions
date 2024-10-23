import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import barbershop from "../../assets/Images//barber-shop-services.jpg";
import hair from "../../assets/Images/hair-services.jpg";
import skin from "../../assets/Images/skin-services.jpg";
import { useStyles } from "./servicetab.style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={props.className}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="custom tabs example"
        classes={{ indicator: classes.tabs.indicator }}
        className={classes.tabsContainer}
      >
        <Tab
          label="Makeup Services"
          {...a11yProps(0)}
          className={classes.tab}
        />
        <Tab label="Hair Services" {...a11yProps(1)} className={classes.tab} />
        <Tab label="Skin Services	" {...a11yProps(2)} className={classes.tab} />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <div className={classes.tabContent}>
          <img src={hair} className={classes.ServiceImg} alt="" />
          <h3 className={`${classes.tabContenth3} ${classes.firstH3NoBorder}`}>
            Unique & Personalized Hair Cuts{" "}
          </h3>
          <p className={classes.tabContentp}>
            Hair cutting is an art form & foundation for styling the hair. It
            gives shape and structure to hairstyles. Without a good,
            professional cut, styling has no basis. When designing a cut, you
            need four important aspects: precision, good technique, creativity
            and a sense of balance. It incorporates balance, line, and movement
            and face shape.
          </p>
          <p className={classes.tabContentp}>
            At Beauty Bee Salon, all hairstylists have been trained to cut hair
            in a structured and formal learning process. We give unique and
            personalized haircuts that flatter your face. Our stylists always
            focus on highlighting your unique angles to bring out the best in
            your features.
          </p>
          <h3 className={classes.tabContenth3}>
            Hair Rituals – Care, Treatments & Texture
          </h3>
          <p className={classes.tabContentp}>
            Hair is the richest ornament of women, was said by Martin Luther
            King. An energizing revitalizing ritual can stimulate the scalp and
            nourish the hair from root to tip to increase hair density. The hair
            is exposed to daily aggression like ultra-violet rays, dust,
            pollution, excessive heat, styling etc. & a ritual is the secret to
            endless happiness after all that. We at Geetanjali, use products
            with a special ingredient which proves to be the natural source of
            life for hair. We provide an ultimate experience & solution for all
            hair types. Witness the transformation of your hair with a huge
            range of hair rituals available at Geetanjali. We use scalp and hair
            analysis diagnostic camera to give you the best services.
          </p>
          <h3 className={classes.tabContenth3}>
            Personalized Ammonia Free Hair Colours – Global, Highlights,
            Lowlights, Ombre
          </h3>
          <p className={classes.tabContentp}>
            Ammonia free hair colour is one of the biggest trends in the hair
            color technology. We, at Beauty Bee Salon understand the importance
            of healthy hair and thus take utmost care while choosing the colour
            for your hair. You can choose from a huge palette of ammonia free
            hair colours and also go for personalized consultation by our
            hairstylists. They will help you choose the best colour to suit your
            complexion, face shape and overall persona.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        <div className={classes.tabContent}>
          <img src={skin} className={classes.ServiceImg} alt="" />
          <h3 className={`${classes.tabContenth3} ${classes.firstH3NoBorder}`}>
            Face Rituals
          </h3>
          <p className={classes.tabContentp}>
            Indulging in skin rituals helps in maintaining a healthy skin. Many
            factors like biological ageing, exposure to weather changes,
            stressful mind, frequent flying or harsh exposure to environmental
            condition compromise the health & beauty of your skin. This is why
            we believe in using unique, exclusive, luxury brands which are rich
            in ingredients, creative, innovative & formulated with the best
            technology. These brands are curative to all skin types such as over
            active oil glands, pigmentation, age spots, fine lines, wrinkles &
            scars.
          </p>
          <h3 className={classes.tabContenth3}>Body Spa</h3>
          <p className={classes.tabContentp}>
            Come experience full body pampering services at Beauty Bee Salon. We
            offer a nutritional feast for your body to keep it looking radiant
            and healthy. We provide services keeping in mind the holistic health
            care and total wellness to soothe your body, mind and soul. Natural
            essential oils, body wraps, exfoliation externally used on the body
            leaves the skin glowing and energized. The simultaneous use of
            pressure points leaves the body with a sense of relaxation, healing
            and rejuvenation.
          </p>
          <h3 className={classes.tabContenth3}>
            Hands & Feet Spa – Manicure & Pedicure
          </h3>
          <p className={classes.tabContentp}>
            Come start your day by pampering yourself or relax after a hard day
            at work with our Spa – Manicure & Pedicure. At Geetanjali, we use
            high quality products to keep your hands as well as your feet
            smooth, soft & supple. Manicure & Pedicure helps increase the blood
            circulation and keeps distress at bay. We assure you a great
            experience at our salon with soaking, exfoliation, massage, masque
            and a moisturizer.
          </p>
          <h3 className={classes.tabContenth3}>Nail Bar</h3>
          <p className={classes.tabContentp}>
            Exclusively introduced and designed for our clients who love to
            flaunt healthy, beautiful nails. You can choose from a range of
            fabulous nail enhancements like Gel, 3D and Swarovski elements.
            Various options like nail art, permanent gel polish, nail
            strengthening treatments, dry manicures and pedicures are available
            at your favorite salon. All our nail technicians are certified and
            trained by international brands’ educators. Choose from a wide range
            of brands & color offerings.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        <div className={classes.tabContent}>
          <img src={barbershop} className={classes.ServiceImg} alt="" />
          <h3 className={`${classes.tabContenth3} ${classes.firstH3NoBorder}`}>
            Barber shop
          </h3>
          <p className={classes.tabContentp}>
            Grooming for men with finest products and services have been our
            area of excellence for over three decades now. Our offerings include
            varied services for your hair, beard, face, hands & feet, and your
            essential wedding service.
          </p>
          <p className={classes.tabContentp}>
            For those men with less time, or the ones who visit us to relax – we
            have different product offerings for both.
          </p>
          <p className={classes.tabContentp}>
            Why should girls have all the salon fun? We have exclusive range of
            brands only for Mens Grooming at all our salons.
          </p>
        </div>
      </TabPanel>
    </div>
  );
}
