import React from 'react';
import CourseOverview from '../components/CourseOverview';
import SubjectsGrid from '../components/SubjectsGrid';
import VirtualClassFeatures from '../components/VirtualClassFeatures';
import CallToAction from '../components/CallToAction';

const Academics = () => {
  return (
    <>
      <CourseOverview />
      <SubjectsGrid />
      <VirtualClassFeatures />
      <CallToAction />
    </>
  );
};

export default Academics;
