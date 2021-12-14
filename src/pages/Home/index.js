import React from "react";

import { Container, Box, Grid } from "@mui/material";

import {
  CatCheeseImg,
  CatHeaderImg,
  CHEDDARImg,
  crazyCatLadyHeaderImg,
  DeadMouseImg,
  MansionImg,
  MouseCheeseImg,
  MouseHeaderImg,
  RanchImg,
  ShackImg,
  TitleImg,
  CupboardImg,
  PantryImg,
  TrashCanImg,
  VaultImg,
} from "../../assets/images/image";

import { db } from "../../db";
import P from "../../components/common/Content";
import H from "../../components/common/Title";

const Home = () => {
  return (
    <div className="banner-section">
      <Container max-width="sm">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={TitleImg} className="title-image" alt="title-img" />
        </Box>
        <P style={{ marginTop: 100 }}>{db.banner.content1}</P>
        <P>{db.banner.content2}</P>
        <P>{db.banner.content3}</P>
        <H>{db.minting.title}</H>
        <P>{db.minting.content1}</P>
        <P style={{ marginBottom: 30 }}>{db.minting.content2}</P>
        <Box
          className="minting-table-image"
          sx={{ display: { md: "block", xs: "none", sm: "none" } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 5,
            }}
          >
            <P style={{ marginTop: 30, color: "#39221b" }}>
              {db.minting.tableSection1.header}
            </P>
          </Box>
          {db.minting.tableSection1.items.map((item, index) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 5,
                  mt: 1,
                }}
              >
                <P style={{ marginTop: 1 }}>{item.range}</P>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <P style={{ marginTop: 1 }}>{item.value}</P>
                  {index !== 0 && (
                    <P
                      style={{
                        marginTop: 1,
                        color: "#ffa700",
                        paddingLeft: 15,
                      }}
                    >
                      $CHEDDAR
                    </P>
                  )}
                </Box>
              </Box>
            );
          })}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 5,
            }}
          >
            <P style={{ marginTop: 12, color: "#39221b" }}>
              {db.minting.tableSection2.header}
            </P>
          </Box>
          {db.minting.tableSection2.items.map((item, index) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 5,
                  mt: 1,
                }}
              >
                <P style={{ marginTop: 2 }}>{item.range}</P>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <P style={{ marginTop: 1 }}>{item.value}</P>
                  <P
                    style={{ marginTop: 1, color: "#ffa700", paddingLeft: 15 }}
                  >
                    $CHEDDAR
                  </P>
                </Box>
              </Box>
            );
          })}
        </Box>
        <H>{db.cheddar.title}</H>
        <Box>
          <Grid container alignItems={"center"}>
            <Grid item xs={12} sm={12} md={9}>
              <P>{db.cheddar.content1}</P>
              <P>{db.cheddar.content2}</P>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <img src={CHEDDARImg} alt="cheddar-img" className="h-100 w-100" />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ marginTop: 15 }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={3}>
              <H style={{ marginTop: 1 }}>{db.mouse.title}</H>
            </Grid>
            <Grid item xs={12} sm={12} md={2} sx={{ margin: "auto" }}>
              <img
                src={MouseHeaderImg}
                alt="mouse-header-img"
                className="w-100"
              />
            </Grid>
          </Grid>
        </Box>
        <P style={{ marginTop: 0 }}>{db.mouse.content1Title}</P>
        <P style={{ paddingLeft: 50 }}>{db.mouse.content1}</P>
        <P>{db.mouse.content2Title}</P>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={9} style={{ paddingLeft: 50 }}>
              <P>{db.mouse.content2_1}</P>
              <P>{db.mouse.content2_2}</P>
              <P style={{ color: "#74CBD3" }}>{db.mouse.small_content2_1}</P>
              <P style={{ marginTop: 0 }}>{db.mouse.content2_3}</P>
              <P style={{ marginTop: 0, color: "#74CBD3" }}>
                {db.mouse.small_content2_2}
              </P>
              <P style={{ marginTop: 0, color: "#74CBD3" }}>
                {db.mouse.small_content2_2}
              </P>
              <P style={{ marginTop: 0, color: "#74CBD3" }}>
                {db.mouse.small_content2_3}
              </P>
              <P style={{ marginTop: 0, color: "#74CBD3" }}>
                {db.mouse.small_content2_4}
              </P>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <img
                src={MouseCheeseImg}
                alt="mouse-cheese-img"
                className="h-100 w-100"
              />
            </Grid>
          </Grid>
        </Box>
        <P>{db.mouse.content3Title}</P>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={4}>
              <img
                src={DeadMouseImg}
                alt="dead-mouse-img"
                className="h-100 w-100"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <P>{db.mouse.content3_1}</P>
              <P>{db.mouse.content3_2}</P>
              <P>{db.mouse.content3_3}</P>
              <P>{db.mouse.content3_4}</P>
              <P style={{ marginTop: 0, color: "#74CBD3" }}>
                {db.mouse.small_content3_1}
              </P>
              <P style={{ marginTop: 0, color: "#74CBD3" }}>
                {db.mouse.small_content3_2}
              </P>
              <P style={{ marginTop: 0, color: "#74CBD3" }}>
                {db.mouse.small_content3_3}
              </P>
              <P style={{ marginTop: 0, color: "#74CBD3" }}>
                {db.mouse.small_content3_4}
              </P>
            </Grid>
          </Grid>
        </Box>
        <P>{db.mouse.content4Title}</P>
        <P style={{ paddingLeft: 50 }}>{db.mouse.content4_1}</P>
        <P style={{ paddingLeft: 50 }}>{db.mouse.content4_2}</P>
        <Box style={{ marginTop: 50 }}>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={2.5}>
              <P style={{ margintTop: 0, textAlign: "center" }}>Trashcan</P>
            </Grid>
            <Grid item xs={2.5}>
              <P style={{ margintTop: 0, textAlign: "center" }}>Cupboard</P>
            </Grid>
            <Grid item xs={2.5}>
              <P style={{ margintTop: 0, textAlign: "center" }}>Pantry</P>
            </Grid>
            <Grid item xs={2.5}>
              <P style={{ margintTop: 0, textAlign: "center" }}>Vault</P>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={2.5}>
              <img
                src={TrashCanImg}
                alt="trash-can-img"
                className="h-100 w-100 p-2"
              />
            </Grid>
            <Grid item xs={2.5}>
              <img
                src={CupboardImg}
                alt="dead-mouse-img"
                className="h-100 w-100 p-2"
              />
            </Grid>
            <Grid item xs={2.5}>
              <img
                src={PantryImg}
                alt="dead-mouse-img"
                className="h-100 w-100 p-2"
              />
            </Grid>
            <Grid item xs={2.5}>
              <img
                src={VaultImg}
                alt="dead-mouse-img"
                className="h-100 w-100 p-2"
              />
            </Grid>
          </Grid>
        </Box>
        {db.mouse.tableBody.map((item, index) => {
          return (
            <Box style={{ marginTop: 20 }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 1 }}
              >
                <Grid item xs={2}>
                  <P style={{ margintTop: 0, textAlign: "center" }}>
                    {item.val1}
                  </P>
                </Grid>
                <Grid item xs={2.5}>
                  <P
                    style={{
                      margintTop: 0,
                      textAlign: "center",
                      color: "#74CBD3",
                    }}
                  >
                    {item.val2}
                  </P>
                </Grid>
                <Grid item xs={2.5}>
                  <P
                    style={{
                      margintTop: 0,
                      textAlign: "center",
                      color: "#74CBD3",
                    }}
                  >
                    {item.val3}
                  </P>
                </Grid>
                <Grid item xs={2.5}>
                  <P
                    style={{
                      margintTop: 0,
                      textAlign: "center",
                      color: "#74CBD3",
                    }}
                  >
                    {item.val4}
                  </P>
                </Grid>
                <Grid item xs={2.5}>
                  <P
                    style={{
                      margintTop: 0,
                      textAlign: "center",
                      color: "#74CBD3",
                    }}
                  >
                    {item.val5}
                  </P>
                </Grid>
              </Grid>
            </Box>
          );
        })}
        <Box style={{ marginTop: 100 }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={2}>
              <H style={{ marginTop: 0 }}>{db.cat.title}</H>
            </Grid>
            <Grid item xs={12} sm={12} md={2} sx={{ margin: "auto" }}>
              <img src={CatHeaderImg} alt="cat-header-img" className="w-100" />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <P
                style={{ marginTop: 20, color: "#D38C08", textAlign: "center" }}
              >
                {db.cat.description}
              </P>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container alignItems={"center"}>
            <Grid item xs={12} sm={12} md={8}>
              <P style={{ marginTop: 0 }}>{db.mouse.content1Title}</P>
              <P style={{ paddingLeft: 50 }}>{db.cat.content1}</P>
              <P>{db.cat.content2Title}</P>
              <P style={{ paddingLeft: 50 }}>{db.cat.content2}</P>
              <P>{db.cat.content3Title}</P>
              <P style={{ paddingLeft: 50 }}>{db.cat.content3}</P>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <img src={CatCheeseImg} alt="cat-cheese-img" className="w-100" />
            </Grid>
          </Grid>
        </Box>
        <P>{db.cat.content4Title}</P>
        <P style={{ paddingLeft: 50 }}>{db.cat.content4}</P>
        <H>{db.estate.title}</H>
        <P>{db.estate.description}</P>
        <Box
          className="estate-table-image"
          sx={{ display: { md: "block", xs: "none", sm: "none" } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 5,
            }}
          >
            <P style={{ marginTop: 35, color: "#39221b" }}>
              {db.estate.tableSection1.header}
            </P>
          </Box>
          {db.estate.tableSection1.items.map((item, index) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 5,
                }}
              >
                <P style={{ marginTop: 8 }}>{item.range}</P>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <P style={{ marginTop: 8 }}>{item.value}</P>
                  <P style={{ marginTop: 8, marginLeft: 10, color: "#ffa700" }}>
                    $CHEDDAR
                  </P>
                </Box>
              </Box>
            );
          })}
        </Box>
        <P>{db.estate.content1Title}</P>
        <P>{db.estate.content2Title}</P>
        <P style={{ paddingLeft: 50 }}>{db.estate.content2}</P>
        <P>{db.estate.content3Title}</P>
        <P style={{ paddingLeft: 50 }}>{db.estate.content3}</P>
        <P>{db.estate.content4Title}</P>
        <P style={{ paddingLeft: 50 }}>{db.estate.content4}</P>
        <Box style={{ marginTop: 30, marginBottom: 30 }}>
          <Grid container columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
            <Grid item xs={12} sm={12} md={4}>
              <img src={ShackImg} alt="shack-img" className="w-100" />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <img src={RanchImg} alt="ranch-img" className="w-100" />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <img src={MansionImg} alt="mansion-img" className="w-100" />
            </Grid>
          </Grid>
        </Box>
        <Box
          className="estate-table2-image"
          sx={{ display: { md: "block", xs: "none", sm: "none" } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 5,
            }}
          >
            <P style={{ marginTop: 32, color: "#39221b" }}>
              {db.estate.tableSection2_1.header}
            </P>
          </Box>
          {db.estate.tableSection2_1.items.map((item, index) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 5,
                }}
              >
                <P style={{ marginTop: 14 }}>{item.range}</P>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <P style={{ marginTop: 14 }}>{item.value}</P>
                </Box>
              </Box>
            );
          })}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 5,
            }}
          >
            <P style={{ marginTop: 20, color: "#39221b" }}>
              {db.estate.tableSection2_2.header}
            </P>
          </Box>
          {db.estate.tableSection2_2.items.map((item, index) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 5,
                }}
              >
                <P style={{ marginTop: 12 }}>{item.range}</P>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <P style={{ marginTop: 12 }}>{item.value}</P>
                  <P
                    style={{ marginTop: 12, marginLeft: 10, color: "#ffa700" }}
                  >
                    $CHEDDAR
                  </P>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ marginTop: 10 }}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={12} md={6}>
              <H style={{ marginTop: 0, fontSize: 36 }}>{db.catLady.title}</H>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <img
                src={crazyCatLadyHeaderImg}
                alt="crazy-cat-lady-header-img"
                className="h-100 w-100"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <P style={{ color: "#ffa700", textAlign: "center" }}>
                {db.catLady.description}
              </P>
            </Grid>
          </Grid>
        </Box>
        <P>{db.catLady.content1Title}</P>
        <P style={{ paddingLeft: 50 }}>{db.catLady.content1}</P>
        <P>{db.catLady.content2Title}</P>
        <P style={{ paddingLeft: 50 }}>{db.catLady.content2}</P>
        <P>{db.catLady.content3Title}</P>
        <P style={{ paddingLeft: 50 }}>{db.catLady.content3}</P>
        <P>{db.catLady.content4Title}</P>
        <P style={{ paddingLeft: 50, marginBottom: 300 }}>
          {db.catLady.content4}
        </P>
      </Container>
    </div>
  );
};

export default Home;
