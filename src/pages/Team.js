import React from 'react';
import Cards from '../components/cards/'
import { Jumbotron } from '../components/commons/Jumbotron'

const teamMembers = [
  { name: "A", about: "A job description need not be limited to explaining the current situation, or work that is currently expected; it may also set out goals for what might be achieved in the future, such as possible promotions routes and conditions.  " },
  { name: "B", about: "A job description need not be limited to explaining the current situation, or work that is currently expected; it may also set out goals for what might be achieved in the future, such as possible promotions routes and conditions.  " },
  { name: "C", about: "A job description need not be limited to explaining the current situation, or work that is currently expected; it may also set out goals for what might be achieved in the future, such as possible promotions routes and conditions.  " },
  { name: "D", about: "A job description need not be limited to explaining the current situation, or work that is currently expected; it may also set out goals for what might be achieved in the future, such as possible promotions routes and conditions.  " },
  { name: "E", about: "A job description need not be limited to explaining the current situation, or work that is currently expected; it may also set out goals for what might be achieved in the future, such as possible promotions routes and conditions.  " },
  { name: "F", about: "A job description need not be limited to explaining the current situation, or work that is currently expected; it may also set out goals for what might be achieved in the future, such as possible promotions routes and conditions.  " },
]

const Team = () => {
  return (
    <div className='home'>
      <Jumbotron
        title="Meet the Team"
        text="We Work hard so that you don't have to!"
      />
      <Cards team={teamMembers} />
    </div>
  );
};

export default Team;
