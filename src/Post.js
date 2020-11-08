import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions
} from "@material-ui/core";
import { posts } from "./posts";

const Post = () => {
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={6} justify="center">
        {posts.map(({ title, excerpt, image }) => {
          return (
            <Grid item key={title}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={title}
                    height="140"
                    image={image}
                    title={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography component="p">{excerpt}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Post;
