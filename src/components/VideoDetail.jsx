import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Paper, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const commentMapping = (comment, darkMode) => (
  <Typography
    key={ comment.id }
    variant="body2"
    sx={ {
      color: darkMode ? "white" : "black",
      border: `3px solid ${darkMode ? "#1e1e1e" : "#f5f3f2"}`,
      borderRadius: "4px",
      padding: "8px",
    } }
  >
    { comment?.snippet.topLevelComment.snippet.textDisplay }
  </Typography>
);

const VideoDetail = ({ darkMode }) => {
  const [ videoDetail, setVideoDetail ] = useState(null);
  const [ videos, setVideos ] = useState(null);
  const [ comments, setComments ] = useState([]);
  const [ commentsExpanded, setCommentsExpanded ] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[ 0 ]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));

    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
      .then((data) => setComments(data.items));
  }, [ id ]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  const handleExpandComments = () => {
    setCommentsExpanded(!commentsExpanded);
  };

  return (
    <Box minHeight="95vh" style={ { backgroundColor: darkMode ? "black" : "white" } }>
      <Stack direction={ { xs: "column", md: "row" } }>
        <Box flex={ 1 }>
          <Box sx={ { width: "100%", top: "86px" } }>
            <ReactPlayer url={ `https://www.youtube.com/watch?v=${id}` } className="react-player" controls width="100%" height="auto" />
            <Typography color={ darkMode ? "white" : "black" } variant="h5" fontWeight="bold" p={ 2 }>
              { title }
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={ { color: darkMode ? "white" : "black" } } py={ 1 } px={ 2 }>
              <Link to={ `/channel/${channelId}` }>
                <Typography variant={ { sm: "subtitle1", md: 'h6' } } color={ darkMode ? "white" : "black" }>
                  { channelTitle }
                  <CheckCircleIcon sx={ { fontSize: "12px", color: darkMode ? "gray" : "black", ml: "5px" } } />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={ { opacity: 0.7 } }>
                  { parseInt(viewCount).toLocaleString() } views
                </Typography>
                <Typography variant="body1" sx={ { opacity: 0.7 } }>
                  { parseInt(likeCount).toLocaleString() } likes
                </Typography>
              </Stack>
            </Stack>
            <Box sx={ { display: "flex", justifyContent: "center", mt: 2 } }>
              <IconButton onClick={ handleExpandComments } sx={ { color: darkMode ? "white" : "black" } }>
                <div style={ { color: darkMode ? "white" : "black", fontSize: "17px" } }><h2>Comments</h2></div>
                <ExpandMoreIcon sx={ { transform: commentsExpanded ? "rotate(180deg)" : "rotate(0deg)" } } />
              </IconButton>
            </Box>
            { commentsExpanded && (
              <Box sx={ { width: "95%", position: "sticky", top: "86px", marginTop: "20px", marginLeft: "25px", overflow: "hidden" } }>
                <Paper elevation={ 3 } sx={ { backgroundColor: darkMode ? "#000" : "#fff", padding: "10px" } }>
                  <Stack direction="column" gap={ 2 }>
                    { comments.slice(0, 5).map((comment) => commentMapping(comment, darkMode)) }
                    {window.innerWidth >= 768 && comments.map((comment) => commentMapping(comment, darkMode))}
                    {window.innerWidth >= 768 && comments.map((comment) => commentMapping(comment, darkMode))}
                    {window.innerWidth >= 768 && comments.slice(0,80).map((comment) => commentMapping(comment, darkMode))}
                    {window.innerWidth <= 500 && comments.slice(0,50).map((comment) => commentMapping(comment, darkMode))}
                   
                  </Stack>
                </Paper>
              </Box>
            ) }
          </Box>
         
        </Box>
        <Box px={ 2 } py={ { md: 1, xs: 5 } } justifyContent="center" alignItems="center" className="right-side-feed">
          <Videos videos={ videos } darkMode={ darkMode } direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
