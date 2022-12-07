import { Box, Grid, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const getdata = async (language) => {
  let res = await fetch(
    `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}`
  );
  let data = await res.json();
  return data;
};
getdata();
const Home = () => {
  let [data, setData] = useState([]);
  let [language, setLanguage] = useState("all");
  useEffect(() => {
    let fetchdata = async () => {
      let gitdata = await getdata(language);
      console.log(gitdata);
      setData(gitdata.items);
    };
    fetchdata();
  }, [language]);

  const handleClick = (lang) => {
    setLanguage(lang);
  };
  return (
    <>
      <Navbar handleClick={handleClick} />
      <Box maxWidth="1100px" margin="auto" mt="10">
        <SimpleGrid
          columns={[1,2,4]}
          gap="10"
        >
          {data.map((repo) => (
            <Card {...repo} key={repo.id} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Home;
