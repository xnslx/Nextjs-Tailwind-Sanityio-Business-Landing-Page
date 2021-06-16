import Head from "next/head";
import { sanityClient } from "../client";
import Hero from "../components/hero";
import CompanySection from "../components/companySection";

function Home({ data }) {
  console.log(data);
  const [item] = data;
  const { content } = item;
  const heroDataArray = [];
  const companyDataArray = [];

  const heroData = content.map((ct) => {
    if (ct._type == "hero") {
      heroDataArray.push(ct);
      return heroDataArray;
    }
  });

  const companyData = content.map((ct) => {
    if (ct._type == "companySection") {
      companyDataArray.push(ct);
      return companyDataArray;
    }
  });

  console.log("companyDataArray", companyDataArray);

  return (
    <div className="">
      <Hero data={heroDataArray} />
      <CompanySection data={companyDataArray} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "page"]';
  const data = await sanityClient.fetch(query);
  console.log("getServerSideProps", data);
  return {
    props: {
      data,
    },
  };
};

export default Home;
