import React, { useState, useEffect } from 'react';
import { Api } from 'Api';
import { Category } from 'Components/Category';
import { NomineeCard } from 'Components/NomineeCard';

import { Container, Row } from './Ballot.styles';

const Ballot = () => {
  const { getBallotData } = Api;

  const [ballotData, setBallotData] = useState(null);
  useEffect(() => {
    getBallotData().then(res => setBallotData(res));
  }, [getBallotData])

  const { items } = ballotData || { items: [] };
  console.log(items)
  return (
    <Container>
      {items.map(item => (
        <div>
        <Category category={item.id} />
        <Row key={item.id}>
          {item.items.map(nominee => <NomineeCard nominee={nominee} key={nominee.id} />)}
        </Row>
        </div>
      ))}
    </Container>
  )
}

export default Ballot;