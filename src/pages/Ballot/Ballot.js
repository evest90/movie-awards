import React, { useState, useEffect, useReducer } from 'react';
import { Api } from 'Api';
import { Category } from 'Components/Category';
import { NomineeCard } from 'Components/NomineeCard';
import { SubmitButton } from 'Components/SubmitButton';
import { Modal } from 'Components/Modal';
import { Sidebar } from 'Components/Sidebar';
import { splitOnDashAndMakeUppercase } from 'utils/transformStrings';
import { Container, Row, SubmitButtonContainer, ShowNomineesButtonContainer, ShowNomineesButton } from './Ballot.styles';

const reducer = (state, action) => {
  const { type } = action;

  if (type === 'reset') {
    return {}
  }

  return {
    ...state,
    [type]: action.payload?.nominee,
  }
}

const Ballot = () => {
  const { getBallotData } = Api;

  const [ballotData, setBallotData] = useState(null);
  useEffect(() => {
    getBallotData().then(res => setBallotData(res));
  }, [getBallotData])

  const { items } = ballotData || { items: [] };
  
  const getSavedState = () => {
    const fetchedState = localStorage.getItem('ballotState');
    return JSON.parse(fetchedState);
  }

  const initialState = { ...getSavedState() };

  const [ballotState, dispatch] = useReducer(reducer, initialState);
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  useEffect(() => {
    if (items.length > 0 && Object.keys(ballotState).length === items.length) {
      setReadyToSubmit(true);
    }

    localStorage.setItem('ballotState', JSON.stringify(ballotState));
  }, [ballotState, items, readyToSubmit])

  const onClick = (category, nominee) => {
    dispatch({ type: category, payload: { nominee }})
  };

  const [showModal, setShowModal] = useState(false);
  const onSubmit = () => {
    setShowModal(true);
  }
  const onCloseModal = () => {
    setShowModal(false);
    dispatch({ type: 'reset' });
    localStorage.removeItem('ballotState');
  }

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const formattedSubmission = Object.entries(ballotState).map(([category, nominee]) =>
    [splitOnDashAndMakeUppercase(category), splitOnDashAndMakeUppercase(nominee)]
  )

  return (
      <div>
        <ShowNomineesButtonContainer>
          <ShowNomineesButton onClick={toggleShowSidebar}>{showSidebar ? 'Hide' : 'Show'} selected nominees</ShowNomineesButton>
        </ShowNomineesButtonContainer>
        <Container>
          {items.map(item => (
            <div key={item.id}>
              <Category category={item.id} />
              <Row>
                {item.items.map(nominee => {
                  const cardIsSelected = ballotState[item.id] && ballotState[item.id] === nominee.id;
                  return (<NomineeCard nominee={nominee} key={nominee.id} onClick={onClick} category={item.id} $isSelected={cardIsSelected} />)})}
              </Row>
            </div>
          ))}
          <SubmitButtonContainer>
            <SubmitButton onSubmit={onSubmit} readyToSubmit={readyToSubmit} />
          </SubmitButtonContainer>
          {showModal && <Modal onClose={onCloseModal} formattedSubmission={formattedSubmission} />}
          {showSidebar && <Sidebar formattedSubmission={formattedSubmission} />}
        </Container>
      </div>
  )
}

export default Ballot;