import { IDevice, IEnhancedOutage, IOutage } from "./interfaces";

export const filterAndAttachDisplayName = (
  outages: IOutage[],
  devices: IDevice[]
): IEnhancedOutage[] => {
  return outages
    .filter(
      (outage) =>
        new Date(outage.begin) >= new Date("2022-01-01T00:00:00.000Z") &&
        devices.find((device) => device.id === outage.id)
    )
    .map((outage) => {
      return {
        ...outage,
        name: devices.find((device) => device.id === outage.id).name,
      };
    });
};
