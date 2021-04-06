import React from "react";
import { useHistory } from 'react-router-dom';
import "./RecipeCard";
import "./style.css";
import "../../App.css";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Link, Typography } from "@material-ui/core";
import { red } from '@material-ui/core/colors';
/* import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert'; */
import FavoriteButton from "../../components/FavoriteButton";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeCard({ id, UserId, name, description, author, difficulty }) {
  let history = useHistory();

  const classes = useStyles();
/*   const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }; */

  let brewLink = <Link onClick={() => { history.push(`/brews/${id}`) }}>
    <Typography variant="h5">{name}</Typography>
  </Link>;

  let userLink = <Typography variant="subtitle2" className="userLink">Created by <Link onClick={() => { history.push(`/user/${UserId}`) }} >{author}</Link></Typography>;

  return (
    <div className="recipeCard">
      <Card className={`${classes.root}`}>
        <CardHeader
          title={brewLink}
          subheader={userLink}
        />
        <CardContent>
          <Typography id="desc" variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography id="diff" variant="body2" color="textSecondary" component="p" class={difficulty}>
            {difficulty}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FavoriteButton
            brewID={id}
          />
        </CardActions>
      </Card>
    </div>
  );
};