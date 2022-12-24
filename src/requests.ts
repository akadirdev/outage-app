import axios, { AxiosError } from "axios";
import { API_KEY, BASE_URL } from "./config";
import { IEnhancedOutage, IOutage, ISiteInfo } from "./interfaces";
import logger from "./logger";

axios.defaults.headers.common["x-api-key"] = API_KEY;

export const getOutages = async (): Promise<IOutage[]> => {
  const data = await axios
    .get(`${BASE_URL}/outages`)
    .then((response) => response.data)
    .catch(async (e: AxiosError) => {
      if (e.response.status === 500) {
        logger.error("Received 500 error code. Retrying...");
        return await getOutages();
      } else {
        logger.error(e.message);
        throw new Error(e.message);
      }
    });

  return data;
};

export const getSiteInfo = async (siteId: string): Promise<ISiteInfo> => {
  const data = await axios
    .get(`${BASE_URL}/site-info/${siteId}`)
    .then((response) => response.data)
    .catch(async (e: AxiosError) => {
      if (e.response.status === 500) {
        logger.error("Received 500 error code. Retrying...");
        return await getSiteInfo(siteId);
      } else {
        logger.error(e.message);
        throw new Error(e.message);
      }
    });

  return data;
};

export const postSiteOutages = async (
  siteId: string,
  enhancedOutages: IEnhancedOutage[]
): Promise<void> => {
  await axios
    .post(`${BASE_URL}/site-outages/${siteId}`, enhancedOutages)
    .then(() => {
      logger.info(`Enhanced Outages posted successfully!`);
    })
    .catch(async (e: AxiosError) => {
      if (e.response.status === 500) {
        logger.error("Received 500 error code from server. Retrying...");
        return await postSiteOutages(siteId, enhancedOutages);
      } else {
        logger.error(e.message);
        throw new Error(e.message);
      }
    });
};
