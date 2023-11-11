import { Avatar } from "antd";
import { FC } from "react";
import { useSessionFeature } from "src/app/features/session/session.feature" ;
import { useFoldersDomain } from "src/domain/folders/folders.domain";
import { useState, useEffect } from 'react'
import { CreativeLibraryFolder } from "src/graphql/client";

export const CreativesTableWidget: FC<any> = () => {
    
    const { currentBrand } = useSessionFeature();
    const { getFolders } =  useFoldersDomain();

    const [folders,setFolders] = useState<CreativeLibraryFolder>();

    useEffect(()=>{
        getCreatives()
    },[currentBrand])
  
    const getCreatives = async ()=>{
        try{
            const data = await getFolders(currentBrand?.id || '');
            setFolders(data)
        }catch(err){
            console.log(err)
        }
    }

if (!folders || !folders.creatives){
    return null
}

return <div>
    <table id="library-page-creatives-table">
        <thead>
            <tr>
                <th className="">Name</th>
                <th>Uploaded Date</th>
                <th>File Type</th>
            </tr>
        </thead>
        <tbody>
            {folders?.creatives.map(creative=>{
                return <tr>
                    <td>
                        <Avatar
                            src={creative.url}
                            style={{
                                backgroundColor: "rgb(230 244 255)",
                                color: "#1677ff",
                                fontWeight: "bold",
                                marginRight:'10px'
                            }}
                            >
                            {creative.url ? "" : name[0]}
                        </Avatar>
                        {creative.name}
                    </td>
                    <td>{creative.createdAt.slice(0,10)}</td>
                    <td>{creative.fileType}</td>
                </tr>
            })}
        </tbody>
    </table>
</div>
};
