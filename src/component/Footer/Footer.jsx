import React from 'react'
import MediaQuery from 'react-responsive';
import FooterDesktop from './FooterDesktop';
import FooterMobie from './FooterMobie';

export default function Footer(props) {
// console.log('props.children', props.children);
  return (
    <div>
      <MediaQuery minWidth={1200}>
        <FooterDesktop/>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1199}>
        <FooterMobie/>
      </MediaQuery>
    </div>
  )
}
