import * as React from "react";
import Layout from "../../components/layout";
import { Container } from "react-bootstrap";
import N4HouseImg from "../../images/N4-Customized-4-Bedroom-Villa1.jpg";
import BangalowImg from "../../images/Luxury-4-bedrooms1-314x192.jpg";
import ApartImg from "../../images/N5-Customized-5-Bedroom-Villa.png";
import VillaImg from "../../images/5-bedroom-double-storied-villa-314x192.jpg";

const properties = [
  {
    id: 0,
    src: "//storage.net-fs.com/hosting/6778892/11/index.htm",
    imgSrc: ApartImg,
    title: "Apartments",
    description:
      "A spacious balcony faces towards the lake Victoria and Golf Course.",
  },
  {
    id: 1,
    src: "//storage.net-fs.com/hosting/6778892/10/index.htm",
    imgSrc: N4HouseImg,
    title: "N4 Customized 4 Bedroom Villa",
    description:
      "Two-storey structure with four self -contained Bedrooms.The reasonable layout offers a comfortable life.",
  },
  {
    id: 2,
    src: "//storage.net-fs.com/hosting/6778892/6/index.htm",
    imgSrc: BangalowImg,
    title: "Bungalow House",
    description:
      "This practical style brings a relaxing, airy and cheerful atmosphere indoors. A decent life you deserve.",
  },
  {
    id: 3,
    src: "//storage.net-fs.com/hosting/6778892/7/index.htm",
    imgSrc: VillaImg,
    title: "Elite High School",
    description: "Elite High School",
  },
];
/*
const TourPage = ({ property }) => {
  return (
    <Layout>
      <Container fluid="xl">
        <h1>{property.title}</h1>
      </Container>
    </Layout>
  );
};*/

export default async function handler(req, res) {
  const tourId = req.params.tourId;
  console.log(tourId);
  // Fetch user
  const property = properties[tourId];/*
  res.json(properties[propertyId]); 
  TourPage({property});*/
}
/*
export const Head = () => <title>Realevr Tours || Tour</title>;*/
