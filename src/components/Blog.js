import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Card, CardContent, CardActions, Typography, Button, TextField, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';  // Importing SendIcon
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';

// Styled components
const BlogContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    padding: 10px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
`;

const LoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
`;

const CategoryContainer = styled.div`
    margin: 20px;
    padding: 15px;
    border-left: 4px solid #0077cc;
    background-color: #ffffff;
    border-radius: 5px;
`;

const Title = styled.h3`
    color: #333;
`;

const Content = styled.p`
    color: #666;
    line-height: 1.6;
`;

const StyledLink = styled.a`
    color: #0077cc;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const WriteForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

function Blog() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({
        title: '',
        content: '',
        category: '',
        comments: [],
        likes: 0
    });

    useEffect(() => {
        const handleGetRecommendation = async () => {
            setError('');
            try {
                const response = await fetch("http://localhost:5001/api/recommendation");
                const jsonData = await response.json();
                if (response.ok) {
                    setData(JSON.parse(jsonData.recommendation));
                } else {
                    setError("Error getting recommendation. Please try again later.");
                }
            } catch (error) {
                setError("Error getting recommendation. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        handleGetRecommendation();

        // Load existing posts from localStorage
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const handleCreatePost = (e) => {
        e.preventDefault();
        const newPost = { ...post, id: uuidv4(), comments: [], likes: 0 };
        const updatedPosts = [...posts, newPost];
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setPosts(updatedPosts);
        setPost({ title: '', content: '', category: '', comments: [], likes: 0 });
    };

    const handleCommentChange = (e, postId) => {
        const newComment = e.target.value;
        setPosts(posts.map(p => p.id === postId ? { ...p, tempComment: newComment } : p));
    };

    const handleSubmitComment = (postId) => {
        const postToUpdate = posts.find(p => p.id === postId);
        const updatedComments = [...postToUpdate.comments, postToUpdate.tempComment];
        const updatedPosts = posts.map(p => p.id === postId ? { ...p, comments: updatedComments, tempComment: '' } : p);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setPosts(updatedPosts);
    };

    const handleDeletePost = (postId) => {
        const updatedPosts = posts.filter(p => p.id !== postId);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setPosts(updatedPosts);
    };

    const handleLikePost = (postId) => {
        const updatedPosts = posts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setPosts(updatedPosts);
    };

    return (
        <Box marginTop={12}>
        <BlogContainer>
            {loading && <LoadingContainer>Loading...</LoadingContainer>}
            {error && <p>{error}</p>}

            {data && (
                <>
                    {data.insurance && (
                        <CategoryContainer>
                            <Title>Health Insurance</Title>
                            {data.insurance.map((item, index) => (
                                <div key={index}>
                                    <Content>{item.summary}</Content>
                                    <StyledLink href={item.link} target="_blank" rel="noopener noreferrer">Read more</StyledLink>
                                </div>
                            ))}
                        </CategoryContainer>
                    )}

                    {data.nutrition && (
                        <CategoryContainer>
                            <Title>Nutrition</Title>
                            {data.nutrition.map((item, index) => (
                                <div key={index}>
                                    <Content>{item.summary}</Content>
                                    <StyledLink href={item.link} target="_blank" rel="noopener noreferrer">Read more</StyledLink>
                                </div>
                            ))}
                        </CategoryContainer>
                    )}

                    {data.physical && (
                        <CategoryContainer>
                            <Title>Physical Well Being</Title>
                            {data.physical.map((item, index) => (
                                <div key={index}>
                                    <Content>{item.summary}</Content>
                                    <StyledLink href={item.link} target="_blank" rel="noopener noreferrer">Read more</StyledLink>
                                </div>
                            ))}
                        </CategoryContainer>
                    )}
                </>
            )}

            {/* Post creation form */}
            <WriteForm onSubmit={handleCreatePost}>
                <TextField name="title" label="Title" fullWidth margin="normal" value={post.title} onChange={handlePostChange} />
                <TextField name="content" label="Content" fullWidth multiline rows={4} margin="normal" value={post.content} onChange={handlePostChange} />
                <Button type="submit" color="primary" variant="contained">Create Post</Button>
            </WriteForm>

            {/* Display posts */}
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                {posts.map((p) => (
                    <Grid item xs={12} sm={6} md={4} key={p.id}>
                        <Card raised>
                            <CardContent>
                                <Typography variant="h5">{p.title}</Typography>
                                <Typography variant="body2">{p.content}</Typography>
                                <Typography variant="body2" color="textSecondary">Likes: {p.likes}</Typography>
                                {p.comments.map((c, index) => (
                                    <Typography key={index} variant="caption" display="block">{c}</Typography>
                                ))}
                            </CardContent>
                            <CardActions>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    placeholder="Add a comment"
                                    fullWidth
                                    value={p.tempComment || ''}
                                    onChange={(e) => handleCommentChange(e, p.id)}
                                />
                                <IconButton onClick={() => handleSubmitComment(p.id)}><SendIcon /></IconButton>
                                <IconButton onClick={() => handleLikePost(p.id)}><FavoriteIcon /></IconButton>
                                <IconButton onClick={() => handleDeletePost(p.id)}><DeleteIcon /></IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </BlogContainer>
        </Box>
    );
}

export default Blog;
