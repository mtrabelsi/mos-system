
import data from './data.json'
import { IncidentType } from './types';

const STORAGE_NAME : string  = 'DB'


export function getData(keyword?: string) : Array<IncidentType> {
  let storedData : Array<IncidentType> = []
  if (localStorage.getItem(STORAGE_NAME)) {
    storedData = JSON.parse(localStorage.getItem(STORAGE_NAME));
  } else {
    storedData= data;
    localStorage.setItem(STORAGE_NAME, JSON.stringify(storedData));
  }
  if(keyword) {
    storedData = filterList(keyword, 'address', storedData)
  }
  return storedData;
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


export const filterList = (q: string, key: string, list: Array<IncidentType>): Array<IncidentType>  => {
    function escapeRegExp(s: string) {
      return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    const words = q
      .split(/\s+/g)
      .map(s => s.trim())
      .filter(s => !!s);
    const hasTrailingSpace = q.endsWith(" ");
    const searchRegex = new RegExp(
      words
        .map((word, i) => {
          if (i + 1 === words.length && !hasTrailingSpace) {
            // The last word - ok with the word being "startswith"-like
            return `(?=.*\\b${escapeRegExp(word)})`;
          } else {
            // Not the last word - expect the whole word exactly
            return `(?=.*\\b${escapeRegExp(word)}\\b)`;
          }
        })
        .join("") + ".+",
      "gi"
    );
    return list.filter(item => searchRegex.test(item[key]));
}
