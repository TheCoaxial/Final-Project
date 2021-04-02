import React, { useEffect, useState } from "react";
import API from "../../utils/api";
import "./RecipeCard";
import "../../App.css";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AuthService from "../../services/auth.service";

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

export default function RecipeCard({ id, UserId, name, description, author }) {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [favorite, setFavorite] = useState(0);

    const user = AuthService.getCurrentUser();

    useEffect(() => {
        API
            .getSpecificFavorite(user.id, id)
            .then(data => {
/*                 console.log("Favorites Data: ", data); */
                setFavorite(data.data.length);
/*                 console.log("isFavorite: ", favorite); */
            });
    }, []);

    const addFav = () => {
        API.saveNewFavorite(id, user.id);
        setFavorite(1);
    };

    const delFav = () => {
        API.deleteFavorite(id, user.id);
        setFavorite(0);
    };

    const renderFavButton = (isFav) => {
        return(
          <div>
              { isFav ? (
                  <IconButton aria-label="remove from favorites" onClick={delFav}>
                      <FavoriteIcon />
                  </IconButton>
              ) : (
                  <IconButton aria-label="add to favorites" onClick={addFav}>
                      <FavoriteBorderIcon />
                  </IconButton>
              )}
          </div>
        );
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let brewLink = <a href={`/brews/${id}`}>{name}</a>;

    let userLink = <span>Created by <a href={`/user/${UserId}`}>{author}</a></span>;

    return (
        <div>
            <Card className={`recipeCard ${classes.root}`}>
            <CardHeader
            title={brewLink}
            subheader={userLink}
            />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            {renderFavButton(favorite)}
{/*             <IconButton aria-label="share">
                <ShareIcon />
            </IconButton> */}
            <IconButton
                className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>Instructions</Typography>
                <Typography paragraph>
                    Show recipe ingredients and instructions here if warranted.
                </Typography>
            </CardContent>
            </Collapse>
            </Card>
        </div>
    );
};