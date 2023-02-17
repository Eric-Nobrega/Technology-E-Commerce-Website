import { Tabs, TabList, TabPanels, TabPanel, Tab } from "@chakra-ui/react";
import { HomepageHome } from "./HomepageHome";
import { HomePageBecomeVendor } from "./HomePageBecomeVendor";
import { HomePageNewArrivals } from "./HomePageNewArrivals";
import { HomePageTrending } from "./HomePageTrending";

export const HeroSection = () => {
  return (
    <div className="">
      <div className="shadow-md">
        <Tabs
          size="sm"
          align="center"
          fontFamily="Karla"
          className="text-slate-400"
        >
          <TabList>
            <Tab>Home</Tab>
            <Tab>New Arrivals</Tab>
            <Tab>Trending</Tab>
            <Tab>Become A Vendor</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HomepageHome />
            </TabPanel>
            <TabPanel>
              <HomePageNewArrivals />
            </TabPanel>
            <TabPanel>
              <HomePageTrending />
            </TabPanel>
            <TabPanel>
              <HomePageBecomeVendor />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
