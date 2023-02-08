import React from "react";
import axios from "axios";
import { API } from "./api";
import {
  Box,
  Select,
  UnorderedList,
  ListItem,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

function PostingWheather() {
  const [data, setData] = React.useState<any>();

  const getCity = (city: any) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=f0bedb69187249a6bcf174437230702&q=${city}&aqi=no`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box width={"50%"} height={"55vh"} m="50px" >
      <Button mr='10px'
        onClick={() => {
          getCity("Tokyo");
        }}
      >
        {" "}
        Tokyo
      </Button>
      <Button mr='10px'
        onClick={() => {
          getCity("Mecca");
        }}
      >
        Mecca
      </Button>
      <Button mr='10px'
        onClick={() => {
          getCity("London");
        }}
      >
        London
      </Button>
      <Button mr='10px'
        onClick={() => {
          getCity("Paris");
        }}
        
      >
        Paris
      </Button>
      <Button mr='10px'
        onClick={() => {
          getCity("Riyadh");
        }}
        
      >
        Riyadh
      </Button>


      <Box    >
        <UnorderedList >
          <ListItem color={'blue'}>
            {data && (
              <Image
                src={
                  data &&
                  data.current &&
                  data.current.condition &&
                  data.current.condition.icon
                }
              />
            )}
            <Text>{data && data.current && data.current.temp_c + " C"}</Text>
            <Text>
              {data &&
                data.current &&
                "Humidity: " + data.current.humidity + "%"}
            </Text>
            <Text>
              {data &&
                data.current &&
                "Wind Speed: " + data.current.wind_kph + " km/h"}
            </Text>
            <Text>
              {data &&
                data.location &&
                "Local Time: " + data.location.localtime}
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default PostingWheather;
