import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './styles.module.css';
const ProjectCard = ({image, title, description}) => {
  return (

    <CardActionArea
      className={styles.cardActionArea}
     >
    <Card className={styles.card}>
      <CardMedia
        component="img"
        className={styles.cardMedia}
        image={image}
        alt={title}
      />
      <CardContent
        className={styles.cardContent}
      >
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
  </Card>
    </CardActionArea>
  )
}

export default ProjectCard