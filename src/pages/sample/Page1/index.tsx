import React from 'react';
import useSampleStore from '../../../zustand/reducers/Sample';

const Page1 = () => {
  const { sampleTest, updateSampleTest } = useSampleStore((state) => state)

  return (
    <>
      <h2>Sample page 1</h2>
      <p>${sampleTest}</p>
      <button onClick={() => updateSampleTest(sampleTest + 1)}>click</button>
    </>
  );
};

export default Page1;
