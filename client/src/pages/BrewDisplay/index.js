import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../../utils/api';
import Comment from '../../components/Comment/comment';
import Ingredient from "../../components/Ingredient";
import Step from "../../components/Step";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ls from 'local-storage';
import List from '@material-ui/core/List';
import Timeline from '@material-ui/lab/Timeline';
import { makeStyles } from '@material-ui/core/styles';
import "./styles.css"
import AuthService from '../../services/auth.service.js';
import RedditShare from "../../components/ShareButtons/RedditShare";
import TwitterShare from "../../components/ShareButtons/TwitterShare";
import FacebookShare from "../../components/ShareButtons/FacebookShare";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteButton from "../../components/FavoriteButton";
import authService from '../../services/auth.service.js';
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    timelineContent: {
        padding: '12px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    verticallyCenterContent: {
        margin: 'auto 0',
    },
}));

export default function BrewDisplay(props) {
    console.log(props);

    const classes = useStyles();

    let [brew, setBrew] = useState({});
    let [comments, setComments] = useState([]);
    let [ingredients, setIngredients] = useState([]);
    let [steps, setSteps] = useState([]);
    const [secondary, setSecondary] = useState(false);

    let [commentInput, setCommentInput] = useState("");

    let { brewId } = useParams();
    const user = AuthService.getCurrentUser();

    useEffect(() => {
        API.getSpecificBrew(brewId)
            .then((data) => {
                console.log(data.data);
                setBrew(data.data);
                setComments(data.data.Comments);
                setIngredients(data.data.Ingredients);
                setSteps(data.data.Steps);
            });
    }, []);

    // const renderCommentForm = (commentId) => {
    //     return (
    //         <form onSubmit={(event) => {
    //             API.updateComment(commentId, commentInput);
    //         }}>
    //             <TextField
    //                 id="outlined-multiline-static"
    //                 multiline
    //                 rows={4}
    //                 variant="outlined"
    //                 placeholder="Add a Comment Here"
    //                 value={commentInput}
    //                 onChange={(e) => {
    //                     setCommentInput(e.target.value)
    //                 }}
    //             />
    //             <Button type="submit" id="submitComment">Edit Comment</Button>
    //         </form>
    //     );
    // }

    const handleCommentEdit = (commentId, body) => {
        API.updateComment(commentId, body).then(res => {
            setComments([...comments, { id: commentId, body: body, author: authService.getCurrentUser().username, UserId: authService.getCurrentUser().id }]);
        });
    }

    const handleCommentDelete = (commentId) => {
        API.deleteComment(commentId).then(res => {
            let temparray = comments.filter(comment => {
                if (comment.id != commentId) {
                    return comment;
                }
            });
            setComments(temparray);
        });
    };

    const handleBrewDelete = () => {
        API.deleteBrew(brewId).then(() => {
            props.history.push('/feed')
        });

    };

    const renderBrewDelete = () => {
        if (brew.UserId === user.id) {
            return (
                <div id="deleteFlex">
                    <Button
                        id="delete"
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={() => handleBrewDelete()}
                    >
                        Delete This Brew
                    </Button>
                </div>
            );
        }
    };

    let commentsJSX = comments.map(comment => <Comment
        handleCommentDelete={handleCommentDelete}
        commentId={comment.id}
        key={comment.createdAt}
        body={comment.body}
        createdAt={comment.createdAt}
        author={comment.author}
        UserId={comment.UserId} />);

    let ingredientsJSX = ingredients.map(ingredient => <Ingredient
        key={ingredient.id}
        name={ingredient.name}
        quantity={ingredient.quantity}
        quantityUnits={ingredient.quantityUnits}
    />);

    let stepNumber = 0;
    let stepsJSX = steps.map(step => {
        stepNumber += 1;
        return (<Step
            key={step.id}
            stepNumber={stepNumber}
            duration={step.duration}
            instructions={step.instructions}
        />);
    });

    if (ls.get('user')) {
        return (
            <div id="brewDisplay">
                <div id="brewDisplayFlex">
                    <div id="mainBrewDisplay">

                        <Grid item xs={12} className="mainHeaders">
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h2" component="div" className="h2-header">
                                {brew.name}
                            </Typography>

                            <div id="shareButtons">
                                <FavoriteButton
                                    brewID={brewId}
                                />
                                <RedditShare />
                                <TwitterShare />
                                <FacebookShare />

                            </div>

                            <Typography sx={{ mt: 4, mb: 2 }} variant="p" component="div" className="author-header">
                                Created by <a href={`/user/${brew.UserId}`}>{brew.author}</a>
                            </Typography>

                            <Typography sx={{ mt: 4, mb: 2 }} variant="p" component="div" className="description-header">
                                {brew.description}
                            </Typography>

                        </Grid>

                        <Grid item xs={12}>
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div" className="h5-headers">
                                Ingredients
                        </Typography>
                            <List id="ingredient-list">
                                {ingredientsJSX}
                            </List>
                        </Grid>

                        <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div" className="h5-headers">
                            Timeline
                        </Typography>
                        <Timeline>
                            {stepsJSX}
                        </Timeline>

                        {renderBrewDelete()}
                    </div>

                    <div id="commentSection">

                        <form onSubmit={(event) => {
                            event.preventDefault();
                            let { id, username } = AuthService.getCurrentUser();
                            API.postComment(id, brewId, username, commentInput).then(res => {
                                setComments([...comments, { UserId: id, body: commentInput, author: username }]);
                                setCommentInput("");
                            });
                        }}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                variant="outlined"
                                placeholder="Add a Comment Here"
                                value={commentInput}
                                onChange={(e) => {
                                    setCommentInput(e.target.value)
                                }}
                            />
                            <Button type="submit" id="submitComment">Submit Comment</Button>
                        </form>

                        <div id="comment-list">
                            {commentsJSX}
                        </div>
                    </div>
                </div>

            </div>
        );
    } else { 
        return <Redirect to='/' /> 
    }
}