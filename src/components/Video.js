import { ImageListItem, ImageListItemBar } from "@mui/material";

export const Video = (img) => {
  return (
    <ImageListItem key={img}>
      <img
        src={`${img}?w=248&fit=crop&auto=format`}
        srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        loading="lazy"
      />
      <ImageListItemBar position="below" title={item.author} />
    </ImageListItem>
  );
};
