import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FullScreenLoader from "../components/FullScreenLoader.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// import "swiper/css/navigation";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';




function LodgePage() {
  SwiperCore.use([Navigation]);
  const [lodge, setLodge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const params = useParams();

  useEffect(() => {
    const fetchLodge = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/lodge/singleLodge/${params.lodgeId}`);
        const data = await res.json();
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
    <Grid sx={{width: "100%", height: "100vh", alignItems: "center", justifyContent: "center"}}> 
      {loading && <FullScreenLoader loading={loading} />}
      {error && (
        <Typography color="red">
          Something went wrong; check lodgeId or internet
        </Typography>
      )}

      {lodge &&!loading && !error && (
        <Grid sx={{width: "100%"}}>
        <Grid sx={{width: {md: "85vw", sm: "100vw", xs: "100vw"}}}>
          <Swiper 
            modules={[Navigation, Pagination, Scrollbar, ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation 
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{width: {}, height: "50vh", alignItems: "center", display: "flex", justifyContent: "center"}}>
            {lodge.lodgeImages.map((imageUrl, index) => (
              console.log(imageUrl),

              <div style={{display: "flex"}}>
              
              <SwiperSlide key={index} style={{width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", display: "flex", justifyContent:"center", allignItems:"center"}}>
            {/*   <Typography>check</Typography>
              <img src={imageUrl} alt="description" style={{width: "100%", height: "100%"}}/>  */}

               <div 
              style={{
                background: `url(${imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                paddingTop: "100px",
                height: "100%", // Adjusted to match the slide height
              }}
            > 
              <Typography>check</Typography>
            </div> 
               {/*   <img src={imageUrl} alt="description" style={{width: "100%", height: "auto"}} />*/}
              </SwiperSlide>
              </div>

            ))}
          </Swiper>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default LodgePage;
