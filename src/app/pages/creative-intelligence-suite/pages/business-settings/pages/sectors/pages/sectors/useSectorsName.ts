import React, { useState } from 'react'
  import { sectorNameItem } from 'src/graphql/client';
const sectorsNames = [
  { id: 1, name: "Apparel and Accessories" },
  { id: 2, name: "Beauty and Personal Care" },
  { id: 3, name: "Food and Beverage" },
  { id: 4, name: "Home and Garden" },
  { id: 5, name: "Sports and Fitness" },
  { id: 6, name: "Home Appliances" },
  { id: 7, name: "Home Improvement" },
  { id: 8, name: "Household Supplies" },
  { id: 9, name: "Pet Care" },
  { id: 10, name: "Tobacco and Smoking Accessories" },
  { id: 11, name: "Toys and Games" },
  { id: 12, name: "Oil and Gas" },
  { id: 13, name: "Renewable Energy" },
  { id: 14, name: "Utilities" },
  { id: 15, name: "Banking and Lending" },
  { id: 16, name: "Insurance" },
  { id: 17, name: "Investment and Wealth Management" },
  { id: 18, name: "Pharmaceuticals and Biotechnology" },
  { id: 19, name: "Medical Devices" },
  { id: 20, name: "Healthcare Services" },
  { id: 21, name: "Construction and Engineering" },
  { id: 22, name: "Aerospace and Defense" },
  { id: 23, name: "Transportation Equipment" },
  { id: 24, name: "Software and IT Services" },
  { id: 25, name: "Hardware and Electronics" },
  { id: 26, name: "Internet Services" },
  { id: 27, name: "Telecommunications Equipment" },
  { id: 28, name: "Telecommunications Services" },
  { id: 29, name: "Networking Equipment" },
  { id: 30, name: "Airlines and air transportation" }
];
const useSectorsName = () => {
  const [ isLoading, setLoading ] = useState<boolean>(false)
  const getSectorsName = async (): Promise<Array<sectorNameItem>> => {
    setLoading(true);
      return new Promise((resolve) => {
        setTimeout(() => {
          setLoading(false);
          resolve(sectorsNames);
        }, 200);
      });
  }
  return (
    { getSectorsName, isLoading }
  )
}

export default useSectorsName