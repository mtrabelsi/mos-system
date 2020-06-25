
import data from './data.json'
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

export function getData() {
  if (localStorage.getItem('myData')) {
    const storedData: Array<IncidentType> = JSON.parse(localStorage.getItem('myData'));
    return storedData;
  } else {
    const storedData: Array<IncidentType> = data;
    localStorage.setItem('myData', JSON.stringify(storedData));
    return storedData;
  }
}

export function getDataById(_id) {
  const data = getData();
  return  data.find((e: IncidentType) => {
    return e._id === _id
  })
}

export function updateData(newIncident: IncidentType) {
  const data = getData();
  const index = data.findIndex((e: IncidentType) => {
    return e._id === newIncident._id
  })
  data[index] = newIncident;
  localStorage.setItem('myData', JSON.stringify(data));
  return true;
}
