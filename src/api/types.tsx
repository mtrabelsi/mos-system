export type IncidentType = {
    _id: string;
    status: {
      criticality: string,
      verified: boolean
    };
    address: string;
    position: {
      from: {
        latitude: number,
        longitude: number
      },
      to: {
        latitude: number,
        longitude: number
      }
    };
    interval: {
      startTime: string,
      endTime: string,
      entryTime: string
    };
  }