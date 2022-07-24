// main libraries
import React from 'react';

// mui
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import StarIcon from '@mui/icons-material/Star';
import options from '../../PollCharts/chartOptions';

// utils
import { determineBests } from '../../../../../utils/determineBests';

const TextResult = (props) => {
  // const determine = () => {
  //   const maxs = [];
  //   const mins = [];
  //   let minimum = props.poll.options[0].totalVotes;
  //   let maximum = props.poll.options[0].totalVotes;
  //   for (let i = 1; i < props.poll.options.length; i++) {
  //     if (props.poll.options[i].totalVotes > minimum) {
  //       minimum = props.poll.options[i].totalVotes;
  //     } else if (props.poll.options[i].totalVotes) {
  //     }
  //   }
  // };

  const renderTextResults = () => {
    const bestOptions = determineBests(props.poll.options);
    const textResultsList = props.poll.options.map((option, index) => {
      for (let j = 0; j < bestOptions.length; j++) {
        if (index === j) {
          return (
            <Badge
              key={option._id}
              badgeContent={`${option.totalVotes}`}
              sx={{
                '& .MuiBadge-badge': {
                  color: 'white',
                  backgroundColor: 'rgb(102, 209, 52)',
                },
              }}
            >
              {/* <Chip size='big' label={option.content} sx={{ fontSize: '40px', padding: '5px', color: 'red' }} /> */}
              <span
                style={{
                  fontSize: '40px',
                  padding: '5px',
                  color: 'red',
                  backgroundColor: 'rgb(237, 237, 237)',
                  borderRadius: '5px',
                  marginRight: '5px',
                  marginLeft: '5px',
                }}
              >
                {option.content}
              </span>
            </Badge>
          );
        } else {
          return (
            // <Badge
            //   key={option._id}
            //   badgeContent={`${option.totalVotes}`}
            //   sx={{
            //     '& .MuiBadge-badge': {
            //       color: 'white',
            //       backgroundColor: 'rgb( 52, 125, 209)',
            //     },
            //   }}
            // >
            //   <span
            //     style={{
            //       fontSize: '12px',
            //       padding: '2px',
            //       backgroundColor: 'rgb(237, 237, 237)',
            //       borderRadius: '5px',
            //       marginRight: '5px',
            //       marginLeft: '5px',
            //     }}
            //   >
            //     {option.content}
            //   </span>
            // </Badge>
            <span>{option.totalVotes}</span>
          );
        }
      }
    });

    return (
      <div className='' style={{ display: 'flex' }}>
        {textResultsList}
      </div>
    );
  };

  return <>{renderTextResults()}</>;
};

export default TextResult;
