import { SITE_ID } from "./config";
import { filterAndAttachDisplayName } from "./filter";
import logger from "./logger";
import { getOutages, getSiteInfo, postSiteOutages } from "./requests";

const main = async () => {
  logger.info("Program started..");

  logger.info("Retrieve all data..");
  const [outages, siteInfo] = await Promise.all([
    getOutages(),
    getSiteInfo(SITE_ID),
  ]);

  logger.info("Filter data..");
  const enhancedOutages = filterAndAttachDisplayName(outages, siteInfo.devices);

  logger.info("Send filtered data..");
  await postSiteOutages(SITE_ID, enhancedOutages);
};

main();
