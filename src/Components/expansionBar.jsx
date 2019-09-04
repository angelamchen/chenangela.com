import React from 'react';  
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

const ExpandedCard = styled(Card)`
    maxWidth: 345,
`
const Media = styled(CardMedia)`
    height: 0,
    paddingTop: '56.25%', // 16:9
`

const Expand = styled(IconButton)`
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
`

export default class RecipeReviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    handleExpandClick = () => {
        const isExpanded = this.state.expanded
        this.setState({
            expanded: !isExpanded
        });
    }

    render() {
        const jobExperience = this.props.jobExperience

        return (
            <ExpandedCard>
                <Media
                component="img"
                    image={jobExperience.logo}
                />
                <CardHeader
                    title={jobExperience.companyName}
                    subheader={jobExperience.position}
                />
                <CardActions disableSpacing>
                    <Expand
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                    >
                        <ExpandMoreIcon />
                    </Expand>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {jobExperience.descriptions.map((desc) => {
                            return (
                                <div>
                                    <Typography>{desc.projectDescription}</Typography>
                                    <Typography>{desc.tools}</Typography>
                                </div>
                            )
                        })}
                    </CardContent>
                </Collapse>
            </ExpandedCard>
        );
    }
}