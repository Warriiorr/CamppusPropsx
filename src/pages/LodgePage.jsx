
import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FullScreenLoader from "../components/FullScreenLoader.jsx";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import NightShelterIcon from '@mui/icons-material/NightShelter';
// import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useTheme } from '@mui/material/styles';




function LodgePage() {
  // SwiperCore.use([Navigation, Pagination, Scrollbar]);
  const [lodge, setLodge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const theme = useTheme();
  const params = useParams();

  useEffect(() => {
    const fetchLodge = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/lodge/singleLodge/${params.lodgeId}`);
        const data = await res.json();
        console.log(data);
        if (data.success === false) {
          setLoading(false);
          setError(data);
          return;
        } else {
          setLoading(false);
          setLodge(data);
          setError(false);
        }
      } catch (error) {
        setError(error.message);
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchLodge();
  }, [params.lodgeId]);

  return (
    <Grid
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // position: "relative",
        marginTop: 1,
      }}
    >
    <Typography variant="h5">Lodge Details</Typography>

    <Grid container sx={{display: {md: "flex", sm: "column"}}}>

          <Box flex={3}>
          

      {loading && <FullScreenLoader loading={loading} />}
      {error && (
        <Typography color="red">
          Something went wrong; check lodgeId or internet
        </Typography>
      )}

      {lodge && !loading && !error && (
        <Grid sx={{width: {sm: "100vw", md: "65vw"} ,position: "relative",  }}>
          <Grid sx={{ width: {md: "65vw"  ,sm: "100vw", xs: "100vw" } }}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              style={{
                width: "100%",
                height: "70vh",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {lodge.lodgeImages.map((imageUrl, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    background: `url(${imageUrl}) no-repeat center center / cover`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                   

                  }}
                ></SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Typography
            sx={{
              position: "absolute",
              bottom: "5px",
              left: "5px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              zIndex: 5,
            }}
          >
          {lodge.leaseTerms}
                    </Typography>
            <IconButton 
            sx={{
              position: "absolute",
              top: "5px",
              right: "60px",
              zIndex: 5,
              border: "1px solid black",
              backgroundColor: "rgba(0, 0, 0, 0.5)"
            }}
            ><FavoriteIcon variant="Outlined" sx={{color:""}}/>
            </IconButton>

            <IconButton 
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
              zIndex: 5,
              border: "1px solid black",
              backgroundColor: "rgba(0, 0, 0, 0.5)"
            }}
            ><ShareIcon variant="Outlined" sx={{color:""}}/>
            </IconButton>

          <Typography
            sx={{
              position: "absolute",
              bottom: "5px",
              right: "5px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              zIndex: 5,
            }}
          >
            {lodge.vacancy}
          </Typography>
        </Grid>
      )}
      
      

      </Box>
      {lodge && !loading && !error && (      
        <Box flex={2}>
      <Box>
        <Box sx={{display: "flex",flexDirection: {md: "column", sm: "row"}, justifyContent: "space-between", padding: "10px", gap:"10px" }}>
        <Typography sx={{display: "flex", alignItems: "center"}}><NightShelterIcon sx={{color: theme.palette.primary.main}}/>{lodge.type}</Typography>

          <Typography sx={{display: "flex", alignItems: "center"}}><LocationOnIcon sx={{color: theme.palette.primary.main}}/>{lodge.location}</Typography>

        </Box>
      </Box>      
      </Box>
      )}

      </Grid>
    </Grid>
  );
}

export default LodgePage;
