import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function InfluencerCard({ account_name, account_id, account_bio, account_followers, account_posts, cost }) {
    return (
        <ListItem alignItems="flex-start" dense disableGutters>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={account_name}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {account_id}
                        </Typography>
                        {account_bio}
                        <Typography
                            variant="body2"
                            color="primary" // Change to primary color for followers
                        >
                            Followers: {account_followers}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="secondary" // Change to secondary color for posts
                        >
                            Posts: {account_posts}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="info" // Change to info color for cost
                        >
                            Cost: {cost}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}
