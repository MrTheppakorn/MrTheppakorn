import React from 'react';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

function App() {
  return (
    <div className="ui container comment">
      <ApprovalCard>
        <CommentDetail faker={faker} />
      </ApprovalCard>
    </div>
  );
}

export default App;
