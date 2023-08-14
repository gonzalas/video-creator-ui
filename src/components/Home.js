import { ImageList, ImageListItem } from "@mui/material";

const classes = {
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",

    // Hide Scrollbar
    "-ms-overflow-style": "none",
    "scrollbar-width": "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
};

export const Home = () => {
  const itemData = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
  ];
  return (
    <>
      <h1 style={{ padding: "2em" }}>Video Creator App</h1>
      <ImageList
        sx={{
          width: 1500,
          height: 900,
          "overflow-y": "hidden",
          marginLeft: "-8em",
          opacity: "90%",
        }}
        cols={3}
        rowHeight={164}
        className={classes.imageList}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.split(".")[0]}>
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="Img"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
