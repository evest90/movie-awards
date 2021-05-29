import React, { useState, useEffect } from 'react';
import { Api } from 'Api';
import { Category } from 'Components/Category';
import { NomineeCard } from 'Components/NomineeCard';

const Ballot = () => {
  const { getBallotData } = Api;

  const [ballotData, setBallotData] = useState(null);
  useEffect(() => {
    getBallotData().then(res => setBallotData(res));
  }, [getBallotData])

  const { items } = ballotData || { items: [] };
  console.log(items)
  return (
    <div className='ballot'>
      {items.map(item => (
        <div key={item.id}>
          <Category category={item.id} />
          {item.items.map(nominee => <NomineeCard nominee={nominee} key={nominee.id} />)}
        </div>
      ))}
    </div>
  )
}

export default Ballot;