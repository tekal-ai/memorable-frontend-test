import React, { useState } from 'react'
import { client } from "src/app/features/repositories/clients/graphql.client";
import { CreativeLibraryFilter, CreativeLibraryItem } from 'src/graphql/client';

const useListFolder = () => {
  const [ isLoading, setLoading ] = useState<boolean>(false)
  const getCreatives = async (request: CreativeLibraryFilter) => {
    setLoading(true)
    try {
      const result = client.chain.query.listFolder({ input: request });
      const creatives = await result.creatives.get({
        id: false,
        parentId: false,
        path:false,
        folders: false,
        creatives:false,
        updatedAt:true,
        __typename:true,
        __scalar:true,
      })
      setLoading(false)
      return creatives;
    } catch (err: any) {
      setLoading(false)
      console.log(`Error retrieving business account: ${err.message}`);
      return []
    }
  }
  return (
    { getCreatives, isLoading }
  )
}

export default useListFolder