import React, { createContext, useContext, useState, useEffect } from "react";
import records from "../utils/records.js"
const RecordsContext = createContext({});

export const RecordsContextProvider = ({ children }) => {
  const [record, setRecords] = useState(records);
  const [selectedRecord, setSelectedRecord] = useState({})
  // const [timeIn, setTimeInRecord] = useState(record.map(obj => ({...obj,timein: '12:09 am'})))
  const [timeIn, setTimeInRecord] = useState([])



  return (
    <RecordsContext.Provider value={{ record, setRecords, selectedRecord, setSelectedRecord, timeIn, setTimeInRecord }}>
      {children}
    </RecordsContext.Provider>
  );
};


export const useRecords = () => useContext(RecordsContext);