export interface IOutage {
  id: string;
  begin: string;
  end: string;
}

export interface ISiteInfo {
  id: string;
  name: string;
  devices: IDevice[];
}

export interface IDevice {
  id: string;
  name: string;
}

export interface IEnhancedOutage {
  id: string;
  name: string;
  begin: string;
  end: string;
}
