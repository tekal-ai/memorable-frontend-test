import { FC, Fragment, useEffect, useState } from "react";
import { Descriptions, Card, Typography } from "antd";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { useSessionFeature } from "src/app/features/session/session.feature";
import useSectorsCount from "./userSectorsCount";
import useSectorsName from "./useSectorsName";
import { completedSector, sectorNameItem } from "src/graphql/client";
import { LoadingPage } from "src/app/features/operations/features/loadings/pages/loading.page";

const cardStyle: React.CSSProperties  = {
    minWidth: 150,
    minHeight: 150,
    background: "rgba(0, 0, 0, 0.06)",
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    textAlign: 'center',
    rowGap: 15,
    padding: 0
    }
const Sectors: FC = () => {
    const [data, setData] = useState<Array<completedSector>>([])
   const { getSectorsCount, isLoading: isLoadingCount } = useSectorsCount();
   const { getSectorsName, isLoading: isLoadingName } = useSectorsName();
   const getData = async () => {
    const result = await Promise.all([getSectorsName(), getSectorsCount()]);
    const names: Array<sectorNameItem> = result[0];
    const joinedData = names.map((nameItem: sectorNameItem) => {
        const { id } = nameItem;
        const itemInCount = result[1].find((countItem) => countItem.id === id);
        if (itemInCount) {
            return { ...itemInCount, ...nameItem }
        }
        return {...nameItem};
    })
    setData(joinedData);
   }
   useEffect(() => {
    getData()
   }, [])
   if (isLoadingName || isLoadingCount) {
    return (<LoadingPage />);
   }
  return (
    <div className="mb-4 flex gap-2 flex-wrap">
            {data.map((item: any, i) => (
                <Fragment key={`card-${i}`}>
                    <Card
                    bodyStyle={{ display: "flex", flexDirection: "column",gap: 10, padding: 0}}
                    style={cardStyle}>
                        <p style={{ fontWeight: 700, wordBreak: "break-all", wordSpacing: "100vw", maxWidth: "140px"}}>Sector name</p>
                        <p>430</p>
                    </Card>
                </Fragment>
               
            ))}
    </div>
  );
};
export default Sectors;
