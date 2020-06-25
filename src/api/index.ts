
import data from './data.json'
import { IncidentType } from './types';

const STORAGE_NAME : string  = 'DB'


export function getData() : Array<IncidentType> {
  if (localStorage.getItem(STORAGE_NAME)) {
    const storedData: Array<IncidentType> = JSON.parse(localStorage.getItem(STORAGE_NAME));
    return storedData;
  } else {
    const storedData: Array<IncidentType> = data;
    localStorage.setItem(STORAGE_NAME, JSON.stringify(storedData));
    return storedData;
  }
}

export function getDataById(_id : string) : IncidentType {
  const data = getData();
  const foundIncident = data.find((incident: IncidentType) => incident._id === _id)
  return foundIncident
}

export function updateData(newIncident: IncidentType) : boolean {
  const data = getData();
  const index = data.findIndex((inc: IncidentType) => inc._id === newIncident._id)
  data[index] = newIncident;
  try {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
  } catch(e) {
    throw new Error(`something went wrong when setting the data to storage ${e.message}`)
  }
  return true;
}
