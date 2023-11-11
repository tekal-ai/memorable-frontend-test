import { FC } from "react";
import { useSectorsDomain,SectorsCounts,SectorsNames } from "src/domain/sectors/sectors.domain";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SpinnerUI } from "src/app/features/operations/ui/spinner.ui";
import { useState, useEffect } from 'react'

const SectorsPage: FC = () => {
  const { getSectorsCount,getSectorsName } = useSectorsDomain();
  const [sectorsNames,setSectorsNames] = useState<SectorsNames[]>();
  const [sectorsCounts,setSectorsCounts] = useState<SectorsCounts[]>();

  useEffect(()=>{
    getCounts();
    getNames();
  },[])

  const getNames = async ()=>{
    try{
        const data = await getSectorsName();
        setSectorsNames(data)
    }catch(err){
        console.log(err)
    }
}

const getCounts = async ()=>{
    try{
        const data = await getSectorsCount();
        setSectorsCounts(data)
    }catch(err){
        console.log(err)
    }
}

  return (
    <CardPageUI>
        <h1>Sectors</h1>
        {(!sectorsCounts || !sectorsNames) && <div className="flex justify-center">
            <SpinnerUI/>
        </div>}
        <div className="flex flex-wrap">
            {sectorsNames?.map(recordName=><div className="flex flex-col justify-between items-center text-center m-6 h-20 w-40">
                    <p className="sector">{recordName.name}</p>
                    <p>{sectorsCounts?.filter(recordCount=>recordCount.id===recordName.id)[0].count}</p>
            </div>)}
        </div>
   </CardPageUI>
  );
};
export default SectorsPage;
